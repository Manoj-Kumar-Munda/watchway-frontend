import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrentUser from "./Auth/useCurrentUser";
import { logout, setUser } from "../store/slices/authSlice";
import { isPublicRoute } from "../utils/publicRoutes";

/**
 * useAuth - Main auth hook that fetches user and syncs to Redux
 * Use at top level (ProtectedRoute, HomePage) where you need to:
 * - Trigger the initial user fetch
 * - Check loading state for auth initialization
 *
 * On public routes, this hook will not trigger any API calls
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isInitialized } = useSelector(
    (state) => state.auth
  );

  const isOnPublicRoute = isPublicRoute();
  const { data, isLoading, isError, isSuccess, isFetched } = useCurrentUser();

  useEffect(() => {
    if (isSuccess && data?.data) {
      dispatch(setUser(data.data));
    }
    if (isError) {
      dispatch(logout());
    }
  }, [isSuccess, isError, data, dispatch]);

  // On public routes, we're not loading (query is disabled)
  // Return early with safe defaults
  if (isOnPublicRoute) {
    return {
      user,
      isAuthenticated,
      isLoading: false, // Not loading on public routes
      isError: false,
    };
  }

  return {
    user,
    isAuthenticated,
    isLoading: !isInitialized || isLoading,
    isError,
  };
};
