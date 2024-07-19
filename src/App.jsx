import { Outlet } from "react-router-dom";
import MainLayout from "./components/MainLayout";

function App() {
  // const { data, isError, error, isLoading } = useCurrentUser();

  return (
    <MainLayout>
      <Outlet />
    </MainLayout>
  );
}

export default App;
