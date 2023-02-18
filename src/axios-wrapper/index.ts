import axios, { AxiosError, AxiosResponse }  from 'axios';
import { ApiError } from '../lib/geocoding/model';


/**
 * Request interceptor to handle request before calling the service.
 */
axios.interceptors.request.use((config) => {
   /*  const token = undefined;
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    } */
    return config;
  });

/**
 * Response interceptor to handle the error.
 */
axios.interceptors.response.use(
    res => res,
    (error: AxiosError) => {
      console.error(`The 7x API has thrown an error with the details.`, error);
      const { code, message } = error;
      const apiError = new ApiError(code, message, -1000); //-1000 custom code
      if(error?.response) {
        apiError.setStatus(error?.response?.status);
        apiError.setData(error?.response?.data);
      }
      return Promise.reject(apiError);
    }
  );

/**
 * Axios wrapper
 * get() - handles http get method
 * post() - handles http post method.
 */
const request = {
    get: async <T> (url: string)=>{
        const response: AxiosResponse<T> = await axios.get<T>(url);
        return response;
    },
   /*  getv1: async <T, D> (): Promise<D> => {
        return <D> {}
    }, */
    post: async <T> (url: string, data = {})=>{
        const response: AxiosResponse<T> = await axios.post<T>(url, data);
        return response;
    },
};

export default request;

