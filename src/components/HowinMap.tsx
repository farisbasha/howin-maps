import React, { useEffect, useRef } from "react";
import useHowinMaps from "../hooks/useHowinMaps";

interface HowinMapProps {
    style?: React.CSSProperties;
    className?: string;
    onMapLoad?: (map: google.maps.Map) => void;
}

const HowinMap: React.FC<HowinMapProps> = ({ style = { height: "400px", width: "100%" }, className, onMapLoad }) => {
    const { map } = useHowinMaps();
    const mapRef = useRef<HTMLDivElement>(null);

    useEffect(() => {
        if (map && mapRef.current) {
            map.setOptions({ center: map.getCenter(), zoom: map.getZoom() || 10 });
            onMapLoad && onMapLoad(map);
        }
    }, [map, onMapLoad]);

    return <div ref={mapRef} className={className} style={style} id="howin-map" />;
};

export default HowinMap;
