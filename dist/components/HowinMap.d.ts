import React from "react";
interface HowinMapProps {
    style?: React.CSSProperties;
    className?: string;
    onMapLoad?: (map: google.maps.Map) => void;
}
declare const HowinMap: React.FC<HowinMapProps>;
export default HowinMap;
