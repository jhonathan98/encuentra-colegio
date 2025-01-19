"use client";

import { GoogleMap, LoadScript, MarkerF,useLoadScript } from '@react-google-maps/api';
import { useMemo } from 'react';
import React from 'react';

const MapaGoogle = ({ center_param, zoom, markers = [] }) => {

    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY,
        version: "weekly" // Asegura que usamos la última versión
    });
    const center = useMemo(() => (center_param), []);

    const containerStyle = {
        width: '100%',
        height: '400px'
    };
    const options = {
        disableDefaultUI: false,
        zoomControl: true,
    };
    
    if (!isLoaded) return <div>Cargando mapa...</div>;

    
    return (        
        // <LoadScript googleMapsApiKey={process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY} version='weekly'>
            <GoogleMap
                mapContainerStyle={containerStyle}
                center={center}
                zoom={zoom}
                options={options}
            >
                {
                    markers.map((marker, index) => (
                        <MarkerF key={index} position={marker.position} />
                    ))
                }
            </GoogleMap>
        // </LoadScript>
    )
}

export default MapaGoogle;