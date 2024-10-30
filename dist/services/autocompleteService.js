"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getPlacePredictions = void 0;
const getPlacePredictions = (input, locationBias, placesLib, map) => {
    return new Promise((resolve, reject) => {
        if (!placesLib)
            return reject("Places library is not loaded.");
        const autoCompleteService = new placesLib.AutocompleteService();
        autoCompleteService.getPlacePredictions({ input, locationBias: locationBias || (map === null || map === void 0 ? void 0 : map.getCenter()) }, (predictions, status) => {
            if (status === "OK" && predictions) {
                resolve(predictions);
            }
            else {
                reject(`Autocomplete failed due to: ${status}`);
            }
        });
    });
};
exports.getPlacePredictions = getPlacePredictions;
