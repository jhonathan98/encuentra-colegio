import React from 'react';
//import { useRouter } from 'next/router';
import { redirect } from 'next/navigation';
import { LogIn, Search, ArrowRight, Facebook, Twitter, Instagram } from 'lucide-react';

const Page = () => {

  //const router = useRouter();

  const IrColegio = () => {
    //router.push('/colegio');
    console.log('Ir a la página de colegio');
  };

  return (
    <div className="min-h-screen flex flex-col bg-gradient-to-br from-blue-50 to-yellow-50">
      {/* Navbar con efecto de cristal */}
      <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
        <div className="max-w-7xl mx-auto px-6 py-4">
          <div className="flex justify-between items-center">
            <div className="flex items-center space-x-2">
              <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                <span className="text-2xl font-bold text-white">E</span>
              </div>
              <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                EduColombia
              </span>
            </div>
            <div className="flex gap-4 items-center">
              <button className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                Iniciar Sesión
              </button>
              <button className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                Registrarse
              </button>
            </div>
          </div>
        </div>
      </nav>

      {/* Hero Section con animación y gradiente */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 bg-gradient-to-br from-yellow-400/20 to-blue-500/20" />
        <div className="absolute inset-0 bg-[url('/fondoColombia.png')] bg-cover bg-center opacity-10" />
        <div className="relative text-center px-4">
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
      <footer className="bg-gradient-to-b from-white to-gray-100 pt-16 pb-8">
        <div className="max-w-7xl mx-auto px-6">
          <div className="grid md:grid-cols-3 gap-12">
            <div>
              <div className="flex items-center space-x-2 mb-6">
                <div className="h-8 w-8 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                  <span className="text-xl font-bold text-white">E</span>
                </div>
                <span className="text-xl font-bold text-gray-800">EduColombia</span>
              </div>
              <p className="text-gray-600">
                Transformando la educación en Colombia con innovación y excelencia.
              </p>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Contacto</h4>
              <div className="space-y-4">
                <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  📧 contacto@educolombia.co
                </p>
                <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  📱 +57 300 123 4567
                </p>
                <p className="text-gray-600 hover:text-blue-600 transition-colors cursor-pointer">
                  📍 Bogotá, Colombia
                </p>
              </div>
            </div>
            <div>
              <h4 className="text-lg font-semibold text-gray-800 mb-6">Síguenos</h4>
              <div className="flex gap-6">
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Facebook size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Twitter size={24} />
                </a>
                <a href="#" className="text-gray-600 hover:text-blue-600 transition-colors">
                  <Instagram size={24} />
                </a>
              </div>
            </div>
          </div>
          <div className="text-center mt-12 pt-8 border-t border-gray-200">
            <p className="text-gray-600">
              © 2025 EduColombia. Todos los derechos reservados.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Page;