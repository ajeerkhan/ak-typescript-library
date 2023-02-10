import Country from "./countryt";

export default interface Location {
    name: string,
    label: string,
    country: Country,
    region?: string,
    county?: string,
    locality?: string,
    continent: string,
}