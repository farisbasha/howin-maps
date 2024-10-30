export interface HowinMapsContextType {
    getPlacePredictions: (input: string, locationBias?: google.maps.LatLng) => Promise<google.maps.places.AutocompletePrediction[]>;
    geocodeLatLng: (latLng: google.maps.LatLng) => Promise<google.maps.GeocoderResult[]>;
    geocodePlaceId: (placeId: string) => Promise<google.maps.GeocoderResult[]>;
    map?: google.maps.Map | null;
}
declare const HowinMapsContext: import("react").Context<HowinMapsContextType | null>;
export default HowinMapsContext;
