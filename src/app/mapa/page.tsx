import React from 'react';
import NavbarColegioCercano from '../Componentes/navbar';
import FooterColegioCercano from '../Componentes/footer';
import MapaGoogle from './Map';

const Page = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Navbar con efecto de cristal */}
      <NavbarColegioCercano />
    
      {/* formulario de 3 selects para buscar la ciudad */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        
      </section>

      {/* Seccion de mapa */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <MapaGoogle 
          center={{ lat: 7.6704435, lng: -76.68009 }}
          zoom={14}
        />
      </section>

      

      {/* Footer mejorado */}
      <FooterColegioCercano />
    </div>
  );
};

export default Page;