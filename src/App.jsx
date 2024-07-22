import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import useCurrentUser from "./hooks/useCurrentUser";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { login, logout } from "./store/slices/authSlice";

function App() {
  const dispatch = useDispatch();
  const { data } = useCurrentUser();
  useEffect(() => {
    if (data?.data?.success) {
      dispatch(login(data.data.data));
    } else if (data?.response?.data) {
      dispatch(logout());
    }
  }, [data]);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
