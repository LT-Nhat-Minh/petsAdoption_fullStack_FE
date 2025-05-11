import axios from "axios";

const instance = axios.create({
  baseURL: process.env.REACT_APP_BACKEND_URL,
});

const NO_RETRY_HEADER = "x-no-retry";
const handleRefreshToken = async () => {
  const refresh_token = localStorage.getItem("refresh_token");
  if (!refresh_token) {
    return null;
  }
  try {
    const response = await instance.post("/api/v1/auth/refresh", {
      refresh_token,
    });
    return response.data.access_token;
  } catch (error) {
    console.error("Error refreshing token:", error);
    return null;
  }
};

//add a request interceptor
instance.interceptors.request.use(
  function (config) {
    // Do something before request is sent
    const access_token = localStorage.getItem("access_token");
    if (access_token) {
      config.headers["Authorization"] = `Bearer ${access_token}`;
    }
    return config;
  },
  function (error) {
    // Do something with request error
    return Promise.reject(error);
  }
);

// Add a response interceptor
instance.interceptors.response.use(
  function (response) {
    // Any status code that lie within the range of 2xx cause this function to trigger
    // Do something with response data
    return response && response.data ? response.data : response;
  },
  async function (error) {
    // Any status codes that falls outside the range of 2xx cause this function to trigger
    // Do something with response error
    // if (
    //   error.config &&
    //   error.response &&
    //   +error.response.status === 401 &&
    //   !error.config.headers[NO_RETRY_HEADER]
    // ) {
    //   const access_token = await handleRefreshToken();
    //   error.config.headers[NO_RETRY_HEADER] = "true";
    //   if (access_token) {
    //     error.config.headers["Authorization"] = `Bearer ${access_token}`;
    //     localStorage.setItem("access_token", access_token);
    //     return instance.request(error.config);
    //   }
    // }

    // if (
    //   error.config &&
    //   error.response &&
    //   +error.response.status === 400 &&
    //   error.config.url === "/api/v1/auth/refresh"
    // ) {
    //   if (
    //     window.location.pathname !== "/"
    //     // && !window.location.pathname.startsWith('/book')
    //   ) {
    //     window.location.href = "/login";
    //   }
    // }

    // return error?.response?.data ?? Promise.reject(error);
    if (error.response && error.response && error.response.data) {
      return error.response.data;
    }
    //if network error, return error object
    if (!error.response) {
      return {
        message: "Network Error",
        status: 500,
        data: null,
      };
    }

    return Promise.reject(error);
  }
);

export default instance;
