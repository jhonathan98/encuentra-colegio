'use client';

import React from 'react';
import { useEffect, useState, useCallback } from 'react';
import NavbarColegioCercano from '@/app/componentes/navbar';
import FooterColegioCercano from '@/app/componentes/footer';
import { SchoolIcon } from 'lucide-react';
import {
  APIProvider,
  Map,
  useMapsLibrary,
  useMap,
  AdvancedMarker,
  InfoWindow,
} from '@vis.gl/react-google-maps';
import Colegios from '@/app/constantes/colegios';


function Direccions() {
  const map = useMap();
  const routesLibrary = useMapsLibrary("routes");
  const [directionsService, setDirectionsService] = useState<google.maps.DirectionsService>();
  const [directionsRederer, setDirectionsRederer] = useState<google.maps.DirectionsRenderer>();
  const [routes, setRoutes] = useState<google.maps.DirectionsRoute[]>([]);
  const [routeIndex, setRouteIndex] = useState<number>(0);
  const routeSelected = routes[routeIndex];
  const leg = routeSelected?.legs[0];

  useEffect(() => {
    if(!routesLibrary || !map) return;
    setDirectionsService(new routesLibrary.DirectionsService());
    setDirectionsRederer(new routesLibrary.DirectionsRenderer({ map }));
  }, [map, routesLibrary]);

  useEffect(() => {
    if(!directionsService || !directionsRederer) return;

    directionsService.route({
      origin: { lat: 7.6668682, lng: -76.6846764 },
      destination: { lat: 7.6604793, lng: -76.6796475 },
      //travelMode: google.maps.TravelMode.DRIVING,
      travelMode: google.maps.TravelMode.WALKING,
      provideRouteAlternatives: true
    }).then((response) => {
      directionsRederer.setDirections(response);
      setRoutes(response.routes);
    })
  }, [directionsService, directionsRederer]);

  useEffect(() => {
    if(!directionsRederer) return;

    directionsRederer.setRouteIndex(routeIndex);
  }, [routeIndex, directionsRederer]);

  if(!leg) return null;

  return (
    <div className="absolute top-1 left-[78%] p-4 bg-white bg-opacity-50 rounded-md">
      <h2><b>{routeSelected.summary}</b></h2>
      <p>{leg.start_address.split(',')[0]} <b>a</b> {leg.end_address.split(',')[0]}</p>
      <p><b>Distancia: </b>{leg.distance?.text}</p>
      <p><b>Tiempo: </b>{leg.duration?.text}</p>

      <h2>Otras Rutas</h2>
      <ul>
        {routes.map((route, index) => (
          <li key={route.summary} className={index === routeIndex ? 'font-bold' : ''}>
            <button onClick={() => setRouteIndex(index)}>
              {route.summary}
            </button>
          </li>
        ))}
      </ul>
    </div>
  );

}



const Page = () => {

  const apikey = process.env.NEXT_PUBLIC_GOOGLE_MAPS_API_KEY || '';
  const centerMap = { lat: 7.6693005, lng: -76.6847988 };
  const [address, setAddress] = useState<string>('');
  const [markerSearch, setMarkerSearch] = useState<{lat:number,lng:number} | null>(null);

  const MapContent = () => {
    const map = useMap();
    const [selectedLocation, setSelectedLocation] = useState<{lat:number,lng:number} | null >(null);
  
    useEffect(() => {
      if (map) {
        // Agregar el listener de click directamente al objeto map
        map.addListener('click', (e:any) => {
          const lat = e.latLng.lat();
          const lng = e.latLng.lng();
          setSelectedLocation({ lat, lng });
          //setMarkerSearch({ lat, lng });
          alert(`Latitud: ${lat}\nLongitud: ${lng}`);
        });        
      }
    }, [map]);
  
    return selectedLocation && <AdvancedMarker position={selectedLocation} />;
  }

  function Geocoding(){
    const geocodingApiLoaded = useMapsLibrary('geocoding');
    const [geocodingService, setGeocodingService] = useState<google.maps.Geocoder | null>(null);
    const [gecodingResults, setGeocodingResults] = useState<google.maps.GeocoderResult>();
    
    useEffect(() => {
      if(!geocodingApiLoaded) return;
      setGeocodingService(new geocodingApiLoaded.Geocoder());
    },[geocodingApiLoaded]);
  
    useEffect(() => {
      if(!geocodingService || !address) return;
  
      geocodingService.geocode({ address }, (results, status) => {
        if(results && status === google.maps.GeocoderStatus.OK){
          setGeocodingResults(results[0]);
          //setMarkerSearch({ lat: results[0].geometry.location.lat(), lng: results[0].geometry.location.lng() });
          console.log(results[0]);
        }
      });
    }, [geocodingService,address]);
  
    if(!geocodingService) return <div>Loading...</div>
    if(!gecodingResults) return <div>No hay resultados...</div>
  
    return <div>
      <h2>{gecodingResults.formatted_address}</h2>
      <p>Latitud: {gecodingResults.geometry.location.lat()}</p>
      <p>Latitud: {gecodingResults.geometry.location.lng()}</p>
      
    </div>
  }
  
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Navbar con efecto de cristal */}
      <NavbarColegioCercano />
    
      {/* formulario de 3 selects para buscar la ciudad */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
      </section>

      {/* Seccion de mapa */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div style={{height:"83vh", width:"98%"}} className="relative overflow-hidden">

          {/* Select para elegir la dirección */}
          <input type="text" value={address} onChange={(e) => setAddress(e.target.value)} />
           <APIProvider apiKey={apikey} version='weekly' >
            <Geocoding />
            <Map            
              defaultCenter={centerMap}
              defaultZoom={15}
              mapId={process.env.NEXT_PUBLIC_MAP_ID}
              fullscreenControl={false}
              gestureHandling={'auto'}
              disableDefaultUI={false}              
              //onClick={handleAggMarker}              
            >
              
              {/* <Direccions/> */}
              <MapContent />
              {
                markerSearch &&  <AdvancedMarker key={'buscado'} position={markerSearch} />                
              }
              {
                Colegios.map((colegio, index) => (
                  <AdvancedMarker key={index} position={colegio.position}>
                    <SchoolIcon size={25} />
                  </AdvancedMarker>
                ) )
              }              
            </Map>
          </APIProvider>         
        </div>
      </section>

      {/* Footer mejorado */}
      <FooterColegioCercano />
    </div>
  );
};

export default Page;