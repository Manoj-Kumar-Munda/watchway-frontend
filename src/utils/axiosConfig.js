import axios from "axios";

const baseURL =
  import.meta.env.VITE_ENV === "development"
    ? import.meta.env.VITE_LOCAL_BASE_URL
    : import.meta.env.VITE_PROD_BASE_URL;

const client = axios.create({
  baseURL,
  withCredentials: true,
  headers: {
    "Content-Type": "application/json",
  },
});

// Add access token to each request
client.interceptors.request.use((config) => {
  const accessToken = localStorage.getItem("accessToken");
  if (accessToken) {
    config.headers.Authorization = `Bearer ${accessToken}`;
  }
  return config;
});

// Handle 401 errors
client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response.status === 401) {
      const refreshToken = localStorage.getItem("refreshToken");
      if (!refreshToken) {
        window.location.href = "/login";
        return Promise.reject(error);
      }
      await client
        .post("/api/v1/users/refresh-token", {
          refreshToken: localStorage.getItem("refreshToken"),
        })
        .then((response) => {
          localStorage.setItem("accessToken", response.data.accessToken);
          localStorage.setItem("refreshToken", response.data.refreshToken);
        })
        .catch((refrehTokenAPIError) => {
          return Promise.reject(refrehTokenAPIError);
        });
      return client(error.config);
    }

    return Promise.reject(error);
  }
);

export const request = async ({ ...options }) => {
  const onSuccess = (response) => {
    return response?.data;
  };
  const onError = async (error) => {
    console.log(error?.response?.status);
    if (error?.response?.status === 401) {
    }
    return Promise.reject(error.response);
  };
  return client(options).then(onSuccess).catch(onError);
};
