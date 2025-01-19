
import { useState } from 'react';

const CalcularDistancia = ({ origen, destino }) => {

    const [distance, setDistance] = useState(null);
    // Función para calcular la distancia
    const service = new window.google.maps.DistanceMatrixService();        
    
    service.getDistanceMatrix(
        {
            origins: [new window.google.maps.LatLng(origen.lat, origen.lng)],
            destinations: [new window.google.maps.LatLng(destino.lat, destino.lng)],
            travelMode: window.google.maps.TravelMode.DRIVING,
            //travelMode: window.google.maps.TravelMode.WALKING
        },
        (response, status) => {
            if (status === 'OK') {
                const distance = response.rows[0].elements[0].distance.text;
                const duration = response.rows[0].elements[0].duration.text;
                //console.log(distance,duration);
                
                //setDistance({ distance, duration });
            } else {
                console.error('Error:', status);
                //distanceGoogle = null;
                //setDistance(null);
            }
        }
    )

    return distance;
    
}

export default CalcularDistancia;