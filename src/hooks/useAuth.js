import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import useCurrentUser from "./Auth/useCurrentUser";
import { logout, setUser } from "../store/slices/authSlice";

/**
 * useAuth - Main auth hook that fetches user and syncs to Redux
 * Use at top level (ProtectedRoute, HomePage) where you need to:
 * - Trigger the initial user fetch
 * - Check loading state for auth initialization
 */
export const useAuth = () => {
  const dispatch = useDispatch();
  const { user, isAuthenticated, isInitialized } = useSelector(
    (state) => state.auth
  );

  const { data, isLoading, isError, isSuccess } = useCurrentUser();

  useEffect(() => {
    if (isSuccess && data?.data) {

      dispatch(setUser(data.data));
    }
    if (isError) {
      dispatch(logout());
    }
  }, [isSuccess, isError, data, dispatch]);

  return {
    user,
    isAuthenticated,
    isLoading: !isInitialized || isLoading,
    isError,
  };
};
