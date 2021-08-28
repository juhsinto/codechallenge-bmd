import { ILocation } from "../../Models/Location";
import LocationService from "../../Services/LocationService";

const locationService = new LocationService();

export const getLocationFromApi = async (location: string) : Promise<ILocation[]> => {
    return await locationService.getLocation(location);
};