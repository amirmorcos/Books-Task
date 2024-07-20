import axios from "axios";
import { ApiUrls } from "utils/constants";

const axiosInstance = axios.create({
  baseURL: ApiUrls.BASE_URL,
  timeout: 4000,
});

axiosInstance.interceptors.request.use((config) => {
  config.params = {
    ...config.params,
    key: "AIzaSyCsZy3hqIFI1S_dxYoQTPlwfawGrafJ4RA",
  };
  return config;
});

export default axiosInstance;
