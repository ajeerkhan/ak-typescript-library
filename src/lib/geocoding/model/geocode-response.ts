import Geocode from "./geocode"
import GeocodeCollection from "./geocode-collection";

export default interface GeocodeResponse {
    status: number,
    data: GeocodeCollection,
}