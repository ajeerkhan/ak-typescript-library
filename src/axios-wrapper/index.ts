import axios from 'axios';
/**
 * Axios wrapper
 * get() - handles http get method
 * post() - handles http post method.
 */
const request = {
    get: async (url: string)=>{
        const response = await axios.get(url);
        return response;
    },
    post: ()=>{

    }
};

export default request;

