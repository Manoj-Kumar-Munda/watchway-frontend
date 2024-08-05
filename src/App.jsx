import { Outlet, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import useCurrentUser from "./hooks/Auth/useCurrentUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlice";
import { setSidebarsToDefault } from "./store/slices/appSlice";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, status } = useCurrentUser();

  useEffect(() => {
    if (status === "success") {
      dispatch(login(data.data));
    } else {
      dispatch(logout());
    }
  }, [status]);

  useEffect(() => {
    dispatch(setSidebarsToDefault());
  }, [pathname]);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
