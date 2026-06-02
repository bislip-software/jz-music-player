import axios from "axios";

const axiosInstance = axios.create({
  baseURL: "https://jz-music-player.vercel.app/api"
});

export default axiosInstance;
