import { Outlet, useLocation, useNavigate } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import useCurrentUser from "./hooks/Auth/useCurrentUser";
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { login, logout } from "./store/slices/authSlice";
import { setSidebarsToDefault } from "./store/slices/appSlice";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();
  const { data, status } = useCurrentUser();
  const navigate = useNavigate();

  useEffect(() => {
    if (status === "success") {
      dispatch(login(data.data));
    } else {
      dispatch(logout());
      if (status === "error") {
        navigate("/login");
      }
    }
  }, [status]);

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
