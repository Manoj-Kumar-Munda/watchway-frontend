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
    Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  },
});

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response.status === 401) {
      await client
        .post(
          "/api/v1/users/refresh-token",
          localStorage.getItem("refreshToken")
        )
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
    return Promise.reject(error.response);
  };
  return client(options).then(onSuccess).catch(onError);
};
