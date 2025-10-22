import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext({
  token: null,
  refreshToken: null,
  isAuthenticated: false,
  login: () => {},
  logout: () => {},
});

/**
 * Validates JWT token format and checks expiration
 * @param {string} token - JWT token to validate
 * @returns {boolean} - true if token is valid and not expired
 */
const isTokenValid = (token) => {
  try {
    if (!token || typeof token !== "string") return false;
    const decoded = jwtDecode(token);

    if (decoded.exp && Date.now() >= decoded.exp * 1000) {
      return false;
    }

    return true;
  } catch (error) {
    console.error("Failed to validate token:", error);
    return false;
  }
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (!context) {
    throw new Error("useAuth must be used within AuthProvider");
  }
  return context;
};

export const AuthProvider = ({ children }) => {
  const [token, setToken] = useState(() => {
    const storedToken = localStorage.getItem("accessToken");
    return storedToken && isTokenValid(storedToken) ? storedToken : null;
  });

  const [refreshToken, setRefreshToken] = useState(() => {
    return localStorage.getItem("refreshToken") || null;
  });

  useEffect(() => {
    if (token && isTokenValid(token)) {
      localStorage.setItem("accessToken", token);
    } else {
      localStorage.removeItem("accessToken");
      if (token) {
        setToken(null);
      }
    }
  }, [token]);

  useEffect(() => {
    if (refreshToken) {
      localStorage.setItem("refreshToken", refreshToken);
    } else {
      localStorage.removeItem("refreshToken");
    }
  }, [refreshToken]);

  const login = useCallback((accessToken, refreshToken) => {
    if (!accessToken || !isTokenValid(accessToken)) {
      console.error("Invalid or expired token provided to login");
      return false;
    }
    setToken(accessToken);

    if (refreshToken) {
      setRefreshToken(refreshToken);
    }

    return true;
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    setRefreshToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
  }, []);

  const value = useMemo(
    () => ({
      token,
      refreshToken,
      isAuthenticated: !!token,
      login,
      logout,
    }),
    [token, refreshToken, login, logout]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
