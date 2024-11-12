import axios from "axios";
import type { AxiosInstance } from "axios";

const TIMEOUT_TIME = 30000;

const instanceAPI: AxiosInstance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_API,
  timeout: TIMEOUT_TIME,
});

export { instanceAPI };
