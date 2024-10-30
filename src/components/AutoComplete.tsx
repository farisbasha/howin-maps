import React, { useState } from "react";
import useHowinMaps from "../hooks/useHowinMaps";

interface AutoCompleteProps {
    renderInput: (props: {
        value: string;
        onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
        className?: string;
    }) => React.ReactNode;
    renderSuggestions: (
        suggestions: google.maps.places.AutocompletePrediction[],
        onSelect: (placeId: string) => void,
        className?: string
    ) => React.ReactNode;
    onPlaceSelected?: (placeId: string) => void;
    className?: string;
    inputClassName?: string;
    suggestionsClassName?: string;
}

const AutoComplete: React.FC<AutoCompleteProps> = ({
    renderInput,
    renderSuggestions,
    onPlaceSelected,
    className,
    inputClassName,
    suggestionsClassName
}) => {
    const { getPlacePredictions } = useHowinMaps();
    const [inputValue, setInputValue] = useState("");
    const [suggestions, setSuggestions] = useState<google.maps.places.AutocompletePrediction[]>([]);

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const value = e.target.value;
        setInputValue(value);

        if (value) {
            getPlacePredictions(value)
                .then(predictions => setSuggestions(predictions))
                .catch(() => setSuggestions([]));
        } else {
            setSuggestions([]);
        }
    };

    const handleSelectSuggestion = (placeId: string) => {
        setSuggestions([]);
        setInputValue("");
        onPlaceSelected && onPlaceSelected(placeId);
    };

    return (
        <div className={className}>
            {renderInput({ value: inputValue, onChange: handleInputChange, className: inputClassName })}
            {renderSuggestions(suggestions, handleSelectSuggestion, suggestionsClassName)}
        </div>
    );
};

export default AutoComplete;
