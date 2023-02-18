import { TimeZoneResponse, ApiError, Options } from "./model";
import { request } from '../../index';
import { baseUrl, timeZoneApiUrl, apiKey } from '..//../configuration';
import { AxiosResponse } from "axios";

const timezone = {
    get: async (latitude: string, longitude: string, options?: Options): Promise<TimeZoneResponse | ApiError | undefined> => {
        try {
            const config : Options = options || { baseUrl, apiUrl: timeZoneApiUrl, apiKey};
            const requestUrl = `${config.baseUrl}${config.apiUrl}/bycoordinates/${encodeURI(latitude)},${encodeURI(longitude)}?apikey=${config.apiKey}`;
            const timezoneResponse: AxiosResponse<TimeZoneResponse> = await request.get<TimeZoneResponse>(requestUrl);
            return timezoneResponse.data;
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

export default timezone;