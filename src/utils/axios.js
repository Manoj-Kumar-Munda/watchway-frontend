import axios from "axios";
import router from "../routes/router";
import { isPublicRoute } from "./publicRoutes";

const baseURL =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_LOCAL_BASE_URL
    : import.meta.env.VITE_PROD_BASE_URL;

export const axiosInstance = axios.create({
  baseURL,
  withCredentials: true,
});

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // Prevent infinite loop: don't retry refresh-token requests
    const isRefreshRequest = originalRequest.url?.includes(
      "/users/refresh-token"
    );

    if (
      error?.response?.status === 401 &&
      !originalRequest._retry &&
      !isRefreshRequest
    ) {
      // On public routes, don't try to refresh token, just throw the error
      if (isPublicRoute()) {
        throw error;
      }

      originalRequest._retry = true;
      try {
        await axiosInstance.post("/users/refresh-token");
        return axiosInstance(originalRequest);
      } catch (refreshError) {
        if (!isPublicRoute()) {
          router.navigate("/login");
        }
      }
    }
    throw error;
  }
);

export const request = async ({ ...options }) => {
  const onSuccess = (response) => {
    return response?.data;
  };
  const onError = async (error) => {
    return Promise.reject(error.response?.data);
  };
  return axiosInstance(options).then(onSuccess).catch(onError);
};
