import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import useCurrentUser from "./hooks/Auth/useCurrentUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { data, status } = useCurrentUser();

  useEffect(() => {
    if (status === "success") {
      dispatch(login(data.data));
    } else {
      dispatch(logout());
    }
  }, [status]);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
