import { Coordinates, Country, Geocode, GeocodeResponse, GeocodeCollection, Location, ApiError } from "./model";
import { request } from '../../index';
import { geoCodeBaseUrl, geoCodeApiUrl, apiKey } from '..//../configuration';

const geocoding = {
    geocode: async (location: string): Promise<GeocodeCollection | ApiError | undefined>  => {
        try {
            //invoke api & get the results
            const requestUrl = `${geoCodeBaseUrl}${geoCodeApiUrl}/geocode/${encodeURI(location)}?apikey=${apiKey}`;
            const geocodeResponse: unknown  = await request.get<GeocodeResponse>(requestUrl);
            const res = <GeocodeResponse>geocodeResponse;
            
            if (res && res.status)
                return res.data;

        } catch (error) {
            throw error;
        }
        return undefined;
    },

    search: async (searchString: string): Promise<GeocodeCollection | ApiError | undefined> => {
        try {
            //invoke api & get the results
            const requestUrl = `${geoCodeBaseUrl}${geoCodeApiUrl}/search/${encodeURI(searchString)}?apikey=${apiKey}`;
            const geocodeResponse: unknown = await request.get<GeocodeResponse>(requestUrl);
            const res = <GeocodeResponse>geocodeResponse;

            if (res && res.status)
                return res.data;

        } catch (error) {
            throw error;
        }
        return undefined;
    },

    reverse: async (latitude: string, longitude: string): Promise<GeocodeCollection | ApiError | undefined> => {
        try {
            //invoke api & get the results
            const requestUrl = `${geoCodeBaseUrl}${geoCodeApiUrl}/reverse/${encodeURI(latitude)},${encodeURI(longitude)}?apikey=${apiKey}`;
            const geocodeResponse: unknown = await request.get<GeocodeResponse>(requestUrl);
            const res = <GeocodeResponse>geocodeResponse;

            if (res && res.status)
                return res.data;

        } catch (error) {
            throw error;
        }
        return undefined;
    },
};

export default geocoding;