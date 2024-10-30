"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const react_1 = require("react");
const HowinMapsContext_1 = __importDefault(require("../context/HowinMapsContext"));
const useHowinMaps = () => {
    const context = (0, react_1.useContext)(HowinMapsContext_1.default);
    if (!context) {
        throw new Error("useHowinMaps must be used within a HowinMapsProvider");
    }
    return context;
};
exports.default = useHowinMaps;
