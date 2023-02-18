import Geocode from "./geocode"

export default interface GeocodeCollection {
    code: number,
    status: string,
    data?: Geocode[],
    error?: string,
}