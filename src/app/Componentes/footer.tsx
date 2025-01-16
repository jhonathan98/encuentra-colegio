'use client';
import { LogIn, Search, ArrowRight, Facebook, Twitter, Instagram } from 'lucide-react';

const FooterColegioCercano = () => {
    return (
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
    )
}

export default FooterColegioCercano;