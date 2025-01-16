"use client";

import { useEffect, useRef, useState } from "react";

const MapaGoogle = ({ center, zoom, markers = [] }) => {

    const googleMapRef = useRef(null);
    const mapInstaceRef = useRef(null);
    const markersRef = useRef([]);
    const [isLoaded, setIsLoaded] = useState(false);

    useEffect(() => {
        
        if (typeof window === 'undefined') return;

        // Función para cargar el script de Google Maps
        const loadGoogleMapsScript = () => {

            if(window.google){
                setIsLoaded(true);
                return;
            }
            
            const script = document.createElement("script");
            script.src = `https://maps.googleapis.com/maps/api/js?key=${process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY}`;            
            script.async = true;
            script.defer = true;
            script.onload = () => {
                setIsLoaded(true);
            }
            document.body.appendChild(script);            
            //script.onload = initializeGoogleMap;
            
        };
        loadGoogleMapsScript();
    },[]);

    useEffect(() => {

        if (!isLoaded) return;
        
        // Función para inicializar el mapa
        if (!mapInstaceRef.current && googleMapRef.current) {
            mapInstaceRef.current = new window.google.maps.Map(googleMapRef.current, {
                center,
                zoom,
            });            
        }

        const addMarkers = () => {
            // Limpiar marcadores anteriores
            markersRef.current.forEach(marker => marker.setMap(null));
            markersRef.current = [];
        
            // Añadir nuevos marcadores
            markers.forEach(markerData => {
                const marker = new window.google.maps.Marker({
                    position: markerData.position,
                    map: mapInstaceRef.current,
                    title: markerData.title,
                    // Opcional: personalizar el ícono
                    icon: markerData.icon,
                    // Opcional: animación
                    animation: markerData.animation ? window.google.maps.Animation.DROP : null
                });
        
                // Opcional: añadir ventana de información
                if (markerData.info) {
                    const infoWindow = new window.google.maps.InfoWindow({
                        content: markerData.info
                    });
            
                    marker.addListener('click', () => {
                        infoWindow.open(mapInstaceRef.current, marker);
                    });
                }
        
                markersRef.current.push(marker);
            });
        };

        addMarkers();
        
        // // Si la API de Google Maps ya está cargada
        // if(!window.google) {
        //     loadGoogleMapsScript();
        // } else {
        //     initializeGoogleMap();
        // }

        // Limpieza
        return () => {
            if (mapInstaceRef.current) {
                // Limpiar recursos si es necesario                
                markersRef.current.forEach(marker => marker.setMap(null));
            }
        };

    }, [isLoaded,center, zoom,markers]);

    
    return (
        <div 
            ref={googleMapRef} 
            style={{ width: '95%', height: '450px' }}
            className="relative"
        >
        {!isLoaded && (
            <div 
            style={{
                position: 'absolute',
                top: 0,
                left: 0,
                right: 0,
                bottom: 0,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                backgroundColor: '#f0f0f0'
            }}
            >
                Cargando mapa...
            </div>
        )}
        </div>
    )
}

export default MapaGoogle;