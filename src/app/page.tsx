import React from 'react';
import { Search } from 'lucide-react';
import NavbarColegioCercano from './Componentes/navbar';
import FooterColegioCercano from './Componentes/footer';
import ButtonRedirectMain from './Componentes/ButtonRedirectMain';

const Page = () => {

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Navbar con efecto de cristal */}
      <NavbarColegioCercano />

      {/* Hero Section con animación y gradiente */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20" />
        <div className="absolute inset-0 bg-[url('/fondoColombia.png')] bg-cover bg-center opacity-10" />
        <div className="relative text-center px-4">
          <ButtonRedirectMain />
          <h1 className="text-5x1 md:text-7xl py-1 font-bold mb-8 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Descubre tu
            <br />
            Colegio Ideal
          </h1>
          <p className="text-xl md:text-2xl text-gray-700 mb-8 max-w-2xl mx-auto">
            Encuentra el mejor colegio para tus hijos en Colombia con nuestra plataforma inteligente
          </p>
          <a href='/mapa' className="group px-8 py-4 bg-gradient-to-r from-yellow-400 to-yellow-500 text-white rounded-full text-xl font-semibold hover:shadow-xl transform hover:-translate-y-1 transition-all duration-300 flex items-center gap-3 mx-80" >
            Buscar Colegio
            <Search className="group-hover:rotate-12 transition-transform duration-300" />
          </a>
        </div>
      </section>

      {/* Team Section con cards mejoradas */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-6">
          <h2 className="text-4xl font-bold text-center mb-4 bg-gradient-to-r from-blue-700 to-blue-900 bg-clip-text text-transparent">
            Nuestro Equipo
          </h2>
          <p className="text-gray-600 text-center mb-12 text-lg">
            Conoce a las mentes brillantes detrás de EduColombia
          </p>
          <div className="grid md:grid-cols-3 gap-8">
            {/* Fundador */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-500 to-blue-700 p-1">
                <div className="w-full h-full rounded-full bg-gray-200" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Juan Pérez
              </h3>
              <p className="text-blue-600 text-center font-medium mb-4">Fundador</p>
              <p className="text-gray-600 text-center">
                Con más de 15 años de experiencia en educación, lidera nuestra visión de transformar la educación en Colombia.
              </p>
            </div>

            {/* Co-fundador */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-yellow-400 to-yellow-500 p-1">
                <div className="w-full h-full rounded-full bg-gray-200" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                María González
              </h3>
              <p className="text-yellow-500 text-center font-medium mb-4">Co-fundadora</p>
              <p className="text-gray-600 text-center">
                Especialista en tecnología educativa, trabaja para hacer la educación más accesible.
              </p>
            </div>

            {/* Inversionista */}
            <div className="group bg-white p-8 rounded-2xl shadow-lg hover:shadow-xl transform hover:-translate-y-2 transition-all duration-300">
              <div className="w-32 h-32 mx-auto mb-6 rounded-full bg-gradient-to-br from-blue-400 to-blue-600 p-1">
                <div className="w-full h-full rounded-full bg-gray-200" />
              </div>
              <h3 className="text-2xl font-bold text-gray-800 text-center mb-2">
                Carlos Rodríguez
              </h3>
              <p className="text-blue-500 text-center font-medium mb-4">Inversionista Principal</p>
              <p className="text-gray-600 text-center">
                Apasionado por impulsar proyectos educativos innovadores en Latinoamérica.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Footer mejorado */}
      <FooterColegioCercano />
    </div>
  );
};

export default Page;