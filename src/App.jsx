import { Outlet, useLocation } from "react-router-dom";
import MainLayout from "./components/MainLayout";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { setSidebarsToDefault } from "./store/slices/appSlice";

function App() {
  const dispatch = useDispatch();
  const { pathname } = useLocation();

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
