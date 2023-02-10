import { Coordinates, Country, Geocode, Geocodes, Location } from "./model";

const geocoding = {
    geocode: (location: string): Geocodes => {
        //mock results;
        const result: Geocodes = {
            geocodes:
                [
                    {
                        search: "",
                        processed: "",
                        coordinates: {
                            latitude: 10.20,
                            longitude: 20.3,
                        },
                        location: {
                            name: "name",
                            label: "label",
                            country: {
                                name: "india",
                                code: "IND",
                            },
                            continent: "asian",
                        },
                    },
                ]
        };

        return result;
    },
    reverse: (latitude: string, longitude: string): any => {

    },
    search: (searchString: string): any => {

    },
};

export default geocoding;