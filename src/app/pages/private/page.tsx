'use client';
import NavbarColegioCercano from "@/app/componentes/navbar";

const privatepage = () => {
    
    return (
        <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
            <NavbarColegioCercano />
    
            
            <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
                Hola mundo pagina privada
            </section>
        </div>
    );
};
  
export default privatepage;