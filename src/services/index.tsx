import axios from "axios";
import Toast from "react-native-toast-message";
import { ApiUrls } from "utils/constants";
import { API_KEY } from "@env";

const axiosInstance = axios.create({
  baseURL: ApiUrls.BASE_URL,
  timeout: 4000,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: API_KEY,
  };
  return config;
});

axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    const errorMessage = (error as Error).message;
    Toast.show({
      text1: errorMessage,
      type: "error",
      position: "bottom",
    });
  }
);

export default axiosInstance;
