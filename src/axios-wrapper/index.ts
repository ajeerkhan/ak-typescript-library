import axios, { AxiosError, AxiosResponse , AxiosRequestConfig }  from 'axios';


/**
 * Request interceptor to handle request before calling the service.
 */
axios.interceptors.request.use((config) => {
    let token = undefined;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  });

/**
 * Response interceptor to handle the error.
 */
axios.interceptors.response.use(
    (res) => res,
    (error: AxiosError) => {
      const { data, status, config } = error.response!;
      console.error(`An error has been thrown with the respone as status code = ${status}, data = ${data}, config = ${config} `);
      return Promise.reject(error);
    }
  );

/**
 * Axios wrapper
 * get() - handles http get method
 * post() - handles http post method.
 */
const request = {
    get: async <T> (url: string)=>{
        const response = await axios.get<T>(url);
        return response;
    },
   /*  getv1: async <T, D> (): Promise<D> => {
        return <D> {}
    }, */
    post: async <T> (url: string, data = {})=>{
        const response = await axios.post<T>(url, data);
        return response;
    },
};

export default request;

