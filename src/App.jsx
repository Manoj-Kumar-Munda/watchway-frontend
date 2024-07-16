import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";

import { request } from "./utils/axios-utils";
import { useQuery } from "@tanstack/react-query";

function App() {
  const { data, isError, error, isLoading } = useQuery({
    queryKey: ["currentUser"],
    queryFn: async () => {
      return await request({ url: "/users/current-user", method: "get" });
    },
  });

  console.log("isError", error);
  console.log("data :", data);
  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
