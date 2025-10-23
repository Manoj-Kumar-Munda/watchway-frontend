import {
  createContext,
  useContext,
  useState,
  useEffect,
  useMemo,
  useCallback,
} from "react";
import { jwtDecode } from "jwt-decode";
import { queryClient } from "../main";
import { useSelector } from "react-redux";

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
  const [user, setUser] = useState(() => {
    const storedUser = localStorage.getItem("user");
    return storedUser ? JSON.parse(storedUser) : null;
  });

  const login = useCallback((userInfo) => {
    if (!userInfo || !isTokenValid(userInfo.accessToken)) {
      console.error("Invalid or expired token provided to login");
      return false;
    }

    localStorage.setItem("accessToken", userInfo.accessToken);
    localStorage.setItem("refreshToken", userInfo.refreshToken);
    localStorage.setItem("user", JSON.stringify(userInfo));
    setUser(userInfo);
    window.location.href = "/";
    return true;
  }, []);

  const logout = useCallback(() => {
    setToken(null);
    localStorage.removeItem("accessToken");
    localStorage.removeItem("refreshToken");
    localStorage.removeItem("user");

    queryClient.clear();
    window.location.href = "/login";
  }, []);

  // const isAuthenticated = useMemo(() => {
  //   const token = localStorage.getItem("accessToken");
  //   return isTokenValid(token);
  // }, [user]);
  const value = useMemo(
    () => ({
      // isAuthenticated,
      login,
      logout,
      user,
    }),
    [login, logout, user]
  );

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
};
