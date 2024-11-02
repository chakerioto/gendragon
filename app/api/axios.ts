import axios from "axios";
import { BASE_URL } from "../const";
import { store } from "@/redux/store";
import { logout, setCredentials } from "@/redux/slices/AuthSlice";

export const dragonAPI = axios.create({
  baseURL: BASE_URL,
  withCredentials: true,
});

dragonAPI.interceptors.request.use(
  (config) => {
    const token = store.getState().auth.accessToken;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

dragonAPI.interceptors.response.use(
  (response) => response,
  async (error) => {
    const originalRequest = error.config;

    // If error is 401 and we haven't tried to refresh token yet
    if (error.response.status === 401 && !originalRequest._retry) {
      originalRequest._retry = true;

      try {
        const refreshToken = store.getState().auth.refreshToken;
        // Call your refresh token endpoint
        const response = await axios.post("/api/auth/token/refresh/", {
          refresh: refreshToken,
        });
        const { accessToken } = response.data;

        // Update the token in store
        store.dispatch(
          setCredentials({
            ...store.getState().auth,
            accessToken,
          })
        );

        // Retry the original request with new token
        originalRequest.headers.Authorization = `Bearer ${accessToken}`;
        return dragonAPI(originalRequest);
      } catch (err) {
        // If refresh token fails, logout user
        store.dispatch(logout());
        return Promise.reject(error);
      }
    }

    return Promise.reject(error);
  }
);
