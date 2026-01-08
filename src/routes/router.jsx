import { createBrowserRouter } from "react-router-dom";
import { publicRoutes, privateRoutes } from "./routes.jsx";
import ProtectedRoutesLayout from "../components/ProtectedRoutes";
import { lazy, Suspense } from "react";

const App = lazy(() => import("../App"));

const wrapWithProtection = (route) => {
  const wrappedRoute = {
    path: route.path,
    element: <ProtectedRoutesLayout>{route.element}</ProtectedRoutesLayout>,
    index: route.index,
  };

  if (route.children) {
    wrappedRoute.children = route.children.map((child) => ({
      path: child.path,
      element: child.element,
      index: child.index,
      children: child.children,
    }));
  }

  return wrappedRoute;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense fallback={<div>Loading...</div>}>
        <App />
      </Suspense>
    ),
    children: [
      ...publicRoutes.map((route) => ({
        path: route.path,
        element: route.element,
        index: route.index,
      })),
      ...privateRoutes.map(wrapWithProtection),
    ],
  },
]);

export default router;
