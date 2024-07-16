import axios from "axios";

const client = axios.create({ baseURL: "http://localhost:8000/api/v1" });

export const request = async ({ ...options }) => {
  const onSuccess = (response) => {
    console.log(response);
    return response;
  };
  const onError = (error) => {
    //optionally catch errors and add additional logging here
    console.log(error);
    return error;
  };
  return client(options).then(onSuccess).catch(onError);
};
