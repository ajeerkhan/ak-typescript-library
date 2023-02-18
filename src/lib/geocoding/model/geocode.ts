import  Coordinates from './coordinates';
import Location from './location';

export default interface Geocode {
    search: string,
    processed: string,
    error?: string,
    coordinates?: Coordinates,
    location?: Location,
}