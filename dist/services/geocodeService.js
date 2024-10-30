"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.geocodePlaceId = exports.geocodeLatLng = void 0;
const geocodeLatLng = (latLng, geocodeLib) => {
    return new Promise((resolve, reject) => {
        if (!geocodeLib)
            return reject("Geocoding library is not loaded.");
        const geocoder = new geocodeLib.Geocoder();
        geocoder.geocode({ location: latLng }, (results, status) => {
            if (status === "OK" && results) {
                resolve(results);
            }
            else {
                reject(`Geocoding failed due to: ${status}`);
            }
        });
    });
};
exports.geocodeLatLng = geocodeLatLng;
const geocodePlaceId = (placeId, geocodeLib) => {
    return new Promise((resolve, reject) => {
        if (!geocodeLib)
            return reject("Geocoding library is not loaded.");
        const geocoder = new geocodeLib.Geocoder();
        geocoder.geocode({ placeId }, (results, status) => {
            if (status === "OK" && results) { // Ensure results is not null
                resolve(results);
            }
            else {
                reject(`Geocoding with placeId failed due to: ${status}`);
            }
        });
    });
};
exports.geocodePlaceId = geocodePlaceId;
