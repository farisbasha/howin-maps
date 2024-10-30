# HowinMap

`HowinMap` is a flexible and customizable React package for Google Maps integration, designed with TypeScript support. This package includes a `HowinMap` component for displaying maps and an `AutoComplete` component for location-based autocomplete suggestions, both of which allow custom rendering and class-based styling.

## Table of Contents

- [Installation](#installation)
- [Usage](#usage)
- [Components](#components)
  - [HowinMap](#howinmap)
  - [AutoComplete](#autocomplete)
- [Props](#props)
  - [HowinMap Props](#howinmap-props)
  - [AutoComplete Props](#autocomplete-props)
- [Examples](#examples)
- [License](#license)

## Installation

1. Install the package via npm:

   ```bash
   npm install howin-map
   ```

2. You’ll also need to install the `@vis.gl/react-google-maps` package if it’s not included:

   ```bash
   npm install @vis.gl/react-google-maps
   ```

## Usage

To get started, wrap your application or component tree with `HowinMapsWrapper`, which initializes the Google Maps API with your API key. You can then use the `HowinMap` and `AutoComplete` components as needed.

```tsx
import React from "react";
import { HowinMap, AutoComplete, HowinMapsWrapper } from "howin-map";

const App = () => {
  return (
    <HowinMapsWrapper apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <YourComponent />
    </HowinMapsWrapper>
  );
};

export default App;
```

## Components

### HowinMap

The `HowinMap` component renders a Google Map within your application. It can be styled with inline `style` or `className` for CSS styling.

```tsx
<HowinMap
  style={{ height: "400px", width: "100%" }}
  className="custom-map"
  onMapLoad={(map) => console.log("Map Loaded", map)}
/>
```

### AutoComplete

The `AutoComplete` component provides location-based autocomplete functionality. Customize the input field and suggestions dropdown with the `renderInput` and `renderSuggestions` props for a tailored user experience.

```tsx
<AutoComplete
  renderInput={({ value, onChange, className }) => (
    <input
      value={value}
      onChange={onChange}
      className={className}
      placeholder="Search for a location"
    />
  )}
  renderSuggestions={(suggestions, onSelect, className) => (
    <ul className={className}>
      {suggestions.map((suggestion) => (
        <li
          key={suggestion.place_id}
          onClick={() => onSelect(suggestion.place_id)}
        >
          {suggestion.description}
        </li>
      ))}
    </ul>
  )}
  onPlaceSelected={(placeId) => console.log("Selected placeId:", placeId)}
  className="autocomplete-wrapper"
  inputClassName="autocomplete-input"
  suggestionsClassName="autocomplete-suggestions"
/>
```

## Props

### HowinMap Props

| Prop        | Type                             | Description                                                                           |
| ----------- | -------------------------------- | ------------------------------------------------------------------------------------- |
| `style`     | `React.CSSProperties`            | Inline styles for the map container. Default is `{ height: "400px", width: "100%" }`. |
| `className` | `string`                         | CSS class name for custom styling.                                                    |
| `onMapLoad` | `(map: google.maps.Map) => void` | Callback that runs when the map is fully loaded.                                      |

### AutoComplete Props

| Prop                   | Type                                                                                                                                     | Description                                                                                         |
| ---------------------- | ---------------------------------------------------------------------------------------------------------------------------------------- | --------------------------------------------------------------------------------------------------- |
| `renderInput`          | `(props: { value: string, onChange: (e: React.ChangeEvent<HTMLInputElement>) => void, className?: string }) => React.ReactNode`          | Custom render function for the input field. Passes `value`, `onChange`, and optional `className`.   |
| `renderSuggestions`    | `(suggestions: google.maps.places.AutocompletePrediction[], onSelect: (placeId: string) => void, className?: string) => React.ReactNode` | Custom render function for suggestions. Passes `suggestions`, `onSelect`, and optional `className`. |
| `onPlaceSelected`      | `(placeId: string) => void`                                                                                                              | Callback when a suggestion is selected, passing the selected `placeId`.                             |
| `className`            | `string`                                                                                                                                 | CSS class name for the wrapper.                                                                     |
| `inputClassName`       | `string`                                                                                                                                 | CSS class name for the input field.                                                                 |
| `suggestionsClassName` | `string`                                                                                                                                 | CSS class name for the suggestions container.                                                       |

## Examples

### Custom Styled Map and AutoComplete

```tsx
import React from "react";
import { HowinMap, AutoComplete, HowinMapsWrapper } from "howin-map";

const App = () => {
  return (
    <HowinMapsWrapper apiKey="YOUR_GOOGLE_MAPS_API_KEY">
      <div>
        <h1>Map with AutoComplete</h1>
        <HowinMap
          style={{ height: "500px", width: "100%" }}
          className="custom-map"
          onMapLoad={(map) => console.log("Map loaded:", map)}
        />
        <AutoComplete
          className="autocomplete-wrapper"
          inputClassName="autocomplete-input"
          suggestionsClassName="autocomplete-suggestions"
          renderInput={({ value, onChange, className }) => (
            <input
              value={value}
              onChange={onChange}
              className={className}
              placeholder="Type a place name..."
            />
          )}
          renderSuggestions={(suggestions, onSelect, className) => (
            <ul className={className}>
              {suggestions.map((suggestion) => (
                <li
                  key={suggestion.place_id}
                  onClick={() => onSelect(suggestion.place_id)}
                >
                  {suggestion.description}
                </li>
              ))}
            </ul>
          )}
          onPlaceSelected={(placeId) =>
            console.log("Selected placeId:", placeId)
          }
        />
      </div>
    </HowinMapsWrapper>
  );
};

export default App;
```

### Adding CSS Styling

Define custom CSS classes to style the components.

```css
.custom-map {
  border: 2px solid #007bff;
}

.autocomplete-wrapper {
  margin-top: 20px;
  width: 100%;
  position: relative;
}

.autocomplete-input {
  width: 100%;
  padding: 8px;
  font-size: 16px;
}

.autocomplete-suggestions {
  list-style: none;
  padding: 0;
  margin: 0;
  border: 1px solid #ddd;
  max-height: 150px;
  overflow-y: auto;
}

.autocomplete-suggestions li {
  padding: 8px;
  cursor: pointer;
}

.autocomplete-suggestions li:hover {
  background-color: #f0f0f0;
}
```
