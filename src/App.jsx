import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import { request } from "./utils/axios-utils";
import { useQuery } from "@tanstack/react-query";
import useCurrentUser from "./hooks/useCurrentUser";

function App() {
  const { data, isError, error, isLoading } = useCurrentUser();

  console.log(data);

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
