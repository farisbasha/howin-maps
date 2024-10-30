"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importStar(require("react"));
const react_google_maps_1 = require("@vis.gl/react-google-maps");
const HowinMapsContext_1 = __importDefault(require("./HowinMapsContext"));
const services_1 = require("../services");
const HowinMapsProvider = ({ children }) => {
    const map = (0, react_google_maps_1.useMap)();
    const geocodeLib = (0, react_google_maps_1.useMapsLibrary)("geocoding");
    const placesLib = (0, react_google_maps_1.useMapsLibrary)("places");
    const howinMapsFunctions = (0, react_1.useMemo)(() => ({
        getPlacePredictions: (input, locationBias) => (0, services_1.getPlacePredictions)(input, locationBias, placesLib, map),
        geocodeLatLng: (latLng) => (0, services_1.geocodeLatLng)(latLng, geocodeLib),
        geocodePlaceId: (placeId) => (0, services_1.geocodePlaceId)(placeId, geocodeLib),
        map,
    }), [geocodeLib, placesLib, map]);
    return react_1.default.createElement(HowinMapsContext_1.default.Provider, { value: howinMapsFunctions }, children);
};
exports.default = HowinMapsProvider;
