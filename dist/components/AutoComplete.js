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
const useHowinMaps_1 = __importDefault(require("../hooks/useHowinMaps"));
const AutoComplete = ({ renderInput, renderSuggestions, onPlaceSelected, className, inputClassName, suggestionsClassName }) => {
    const { getPlacePredictions } = (0, useHowinMaps_1.default)();
    const [inputValue, setInputValue] = (0, react_1.useState)("");
    const [suggestions, setSuggestions] = (0, react_1.useState)([]);
    const handleInputChange = (e) => {
        const value = e.target.value;
        setInputValue(value);
        if (value) {
            getPlacePredictions(value)
                .then(predictions => setSuggestions(predictions))
                .catch(() => setSuggestions([]));
        }
        else {
            setSuggestions([]);
        }
    };
    const handleSelectSuggestion = (placeId) => {
        setSuggestions([]);
        setInputValue("");
        onPlaceSelected && onPlaceSelected(placeId);
    };
    return (react_1.default.createElement("div", { className: className },
        renderInput({ value: inputValue, onChange: handleInputChange, className: inputClassName }),
        renderSuggestions(suggestions, handleSelectSuggestion, suggestionsClassName)));
};
exports.default = AutoComplete;
