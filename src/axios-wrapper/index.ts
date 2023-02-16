import axios, { AxiosError, AxiosResponse , AxiosRequestConfig }  from 'axios';
import { appendFile } from 'fs';
import { ApiError } from '../lib/geocoding/model';


/**
 * Request interceptor to handle request before calling the service.
 */
axios.interceptors.request.use((config) => {
    const token = undefined;
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
      if(error.response) {
        const { data , status, config } = error.response!;
        console.error(`The 7x Timezone API has been thrown an error with the details i.e. status = ${status}, data = ${data}, config = ${config} `);
        return {data, status}; // considered as success case only.
      }
      else {
        const { message , code, config } = error;
        console.error(`The 7x Timezone API has been thrown an error with the details i.e. status code = ${code}, message = ${message}, config = ${config} `);
        return Promise.reject(new ApiError(code, message));
      }
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

