import axios from 'axios';

class LocationService {

    baseUrl: string;
    key: string;
    format: string;

    constructor () {
        this.baseUrl = "https://eu1.locationiq.com/v1";
        this.key = "pk.293e9914e79907cf104752752cf30ab3";
        this.format = "json";
    }

    async getLocation(location: string) {
        let responseData = [];

        const locationUrl = `${this.baseUrl}/search.php?key=${this.key}&format=${this.format}&q=${location}`;
        const response = await axios.get(locationUrl);

        responseData = [response.data[0]];
        // RETURN JUST THE FIRST ELEMENT
        return responseData;
    }
}

export default LocationService;