import axios from "axios";

const API_BASE_URL = "http://localhost:8000/api";

// Construct the base API instance using axios
// Basically a reusable template for making API requests to the backend
const api = axios.create({
  baseURL: API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
    Accept: "application/json",
  },
  withCredentials: false,
});

// Add authentication token to requests
// Basically, when the react frontend makes a request to the backend, it will include the token in the headers since our API from the backend which is in laravel requies the token to access the protected routes
api.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("auth_token");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// Handle unauthorized responses globally
// Basically, if the backend responds with a 401 Unauthorized status because the user is already logged out or the session has ended, the frontend will automatically log out the user by removing the token from local storage and redirecting to the login page
api.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      localStorage.removeItem("auth_token");
      window.location.href = "/login";
    }

    return Promise.reject(error);
  }
);

export const authAPI = {
  login: (credentials) => api.post("/login", credentials),
  logout: () => api.post("/logout"),
  getUser: () => api.get("/user"),
};

export default api;
