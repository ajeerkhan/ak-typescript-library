import { GeocodeResponse, ApiError, Options } from "./model";
import { request } from '../../index';
import { baseUrl, geoCodeApiUrl, apiKey } from '..//../configuration';
import { AxiosResponse } from "axios";

const geocoding = {
    geocode: async (location: string, options?: Options): Promise<GeocodeResponse | ApiError | undefined>  => {
        /* eslint-disable-next-line no-useless-catch */
        try { /* eslint-disable no-useless-catch */
            const config : Options = options || { baseUrl, apiUrl: geoCodeApiUrl, apiKey};
            const requestUrl = `${config.baseUrl}${config.apiUrl}/geocode/${encodeURI(location)}?apikey=${config.apiKey}`;
            const geocodeResponse: AxiosResponse<GeocodeResponse> = await request.get<GeocodeResponse>(requestUrl);
            return geocodeResponse.data;
        } catch (error) {
            const apiError : ApiError = error as ApiError;
            if(apiError.getData()?.data) {
                apiError.setData(apiError.getData()?.data); //handling data property, override if data property available in the next level.
            }

            if(apiError.getData()) //handling message property, appears if no data property available.
                delete apiError["message"];

            throw apiError;
        }
    },

    search: async (searchString: string, options?: Options): Promise<GeocodeResponse | ApiError | undefined> => {
        try {
            const config : Options = options || { baseUrl, apiUrl: geoCodeApiUrl, apiKey};
            const requestUrl = `${config.baseUrl}${config.apiUrl}/search/${encodeURI(searchString)}?apikey=${config.apiKey}`;
            const geocodeResponse: AxiosResponse<GeocodeResponse> = await request.get<GeocodeResponse>(requestUrl);
            return geocodeResponse.data;
        } catch (error) {
            const apiError : ApiError = error as ApiError;
            if(apiError.getData()?.data) {
                apiError.setData(apiError.getData()?.data); //handling data property, override if data property available in the next level.
            }

            if(apiError.getData()) //handling message property, appears if no data property available.
                delete apiError["message"];

            throw apiError;
        }
    },

    reverse: async (latitude: string, longitude: string, options?: Options): Promise<GeocodeResponse | ApiError | undefined> => {
        try {
            const config : Options = options || { baseUrl, apiUrl: geoCodeApiUrl, apiKey};
            const requestUrl = `${config.baseUrl}${config.apiUrl}/reverse/${encodeURI(latitude)},${encodeURI(longitude)}?apikey=${config.apiKey}`;
            const geocodeResponse: AxiosResponse<GeocodeResponse> = await request.get<GeocodeResponse>(requestUrl);
            return geocodeResponse.data;
        } catch (error) {
            const apiError : ApiError = error as ApiError;
            if(apiError.getData()?.data) {
                apiError.setData(apiError.getData()?.data); //handling data property, override if data property available in the next level.
            }

            if(apiError.getData()) //handling message property, appears if no data property available.
                delete apiError["message"];

            throw apiError;
        }
    },
};

export default geocoding;