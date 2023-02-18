import Geocode from "./geocode"
import GeocodeCollection from "./geocode-collection";

export default interface GeocodeResponse {
    code: number,
    status: number,
    data: GeocodeCollection,
}