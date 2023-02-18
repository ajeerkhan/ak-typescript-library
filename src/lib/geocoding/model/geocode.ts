import  { Coordinates } from '../../../model';
import Location from './location';

export default interface Geocode {
    search: string,
    processed: string,
    error?: string,
    coordinates?: Coordinates,
    location?: Location,
}