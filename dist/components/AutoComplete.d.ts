import React from "react";
interface AutoCompleteProps {
    renderInput: (props: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        className?: string;
    }) => React.ReactNode;
    renderSuggestions: (suggestions: google.maps.places.AutocompletePrediction[], onSelect: (placeId: string) => void, className?: string) => React.ReactNode;
    onPlaceSelected?: (placeId: string) => void;
    className?: string;
    inputClassName?: string;
    suggestionsClassName?: string;
}
declare const AutoComplete: React.FC<AutoCompleteProps>;
export default AutoComplete;
