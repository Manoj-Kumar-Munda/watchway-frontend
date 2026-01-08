export const PUBLIC_ROUTES = [
  "/",
  "/login",
  "/register",
  "/search",
  "/watch",
  "/playlist",
  "/policy",
  "/terms",
];

export const isPublicRoute = () => {
  const currentPath = window.location.pathname;
  return PUBLIC_ROUTES.some(
    (route) => currentPath === route || currentPath.startsWith(route + "/")
  );
};
