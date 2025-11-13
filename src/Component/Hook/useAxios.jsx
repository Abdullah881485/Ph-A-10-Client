import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://ph-a-10-server.vercel.app",
});

const useAxios = () => {
  return axiosInstance;
};

export default useAxios;
