"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = __importDefault(require("react"));
const react_google_maps_1 = require("@vis.gl/react-google-maps");
const HowinMapsProvider_1 = __importDefault(require("./context/HowinMapsProvider"));
const HowinMapsWrapper = ({ apiKey, children }) => (react_1.default.createElement(react_google_maps_1.APIProvider, { apiKey: apiKey },
    react_1.default.createElement(HowinMapsProvider_1.default, null, children)));
exports.default = HowinMapsWrapper;
