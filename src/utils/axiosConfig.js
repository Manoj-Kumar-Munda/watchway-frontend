import axios from "axios";

const client = axios.create({ baseURL: "/api/v1" });

client.interceptors.response.use(
  (response) => {
    return response;
  },
  async (error) => {
    if (error?.response.status === 401) {
      await axios
        .post("/api/v1/users/refresh-token", {
          withCredentials: true,
        })
        .catch((refrehTokenAPIError) => {
          return Promise.reject(refrehTokenAPIError);
        });
      return axios(error.config);
    }

    return Promise.reject(error);
  }
);

export const request = async ({ ...options }) => {
  const onSuccess = (response) => {
    return response?.data;
  };
  const onError = async (error) => {
    // console.log(error.response);
    return Promise.reject(error.response);
  };
  return client(options).then(onSuccess).catch(onError);
};
