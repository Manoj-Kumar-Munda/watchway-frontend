import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import useCurrentUser from "./hooks/Auth/useCurrentUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlice";
import { setSidebarsToDefault } from "./store/slices/appSlice";
import { useAuth } from "./context/authContext";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, status } = useCurrentUser();
  const { isAuthenticated } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    if (isAuthenticated && status === "success") {
      dispatch(login(data.data));
    } else {
      dispatch(logout());
      if (status === "error") {
        navigate("/login");
      }
    }
  }, [status, isAuthenticated]);

  useEffect(() => {
    dispatch(setSidebarsToDefault());
  }, [pathname]);

  return (
    <>
      <MainLayout>
        <Outlet />
      </MainLayout>
    </>
  );
}

export default App;
