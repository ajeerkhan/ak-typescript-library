import axios, { AxiosError, AxiosResponse , AxiosRequestConfig }  from 'axios';

interface Todo {
    userId: number;
    id: number;
    title: string;
    completed: boolean
  }


/**
 * Axios wrapper
 * get() - handles http get method
 * post() - handles http post method.
 */
const request = {
    get: async <Todo> (url: string)=>{
        const response = await axios.get<Todo>(url);
        return response;
    },
};

export default request;

