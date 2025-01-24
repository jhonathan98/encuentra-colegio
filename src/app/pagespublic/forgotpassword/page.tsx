'use client';
import Link from 'next/link';
import React from 'react';
import { useState } from 'react';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';

const ForgotPassword: React.FC = () => {
    const [email, setEmail] = useState<string>('');
    const route = useRouter();
    
    const handleSubmitSendEmail = async (e: React.FormEvent) => {
        e.preventDefault();
        
        const response = await supabase.auth.resetPasswordForEmail(email, {
            redirectTo: `${window.location.origin}/pagespublic/update-password`
        });
        
        // if(response){
        //     route.push('/pagespublic/update-password');
        // }
        
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Recuperar Contraseña</h2>
                <p className="text-gray-600 text-center mb-8">
                Ingresa tu correo electrónico y te enviaremos un enlace para restablecer tu contraseña.
                </p>
                <form onSubmit={handleSubmitSendEmail}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="email">
                            Correo Electrónico
                        </label>
                        <input
                            type="email"
                            id="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300"
                            placeholder="Ingresa tu correo electrónico"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                    >
                        Enviar Instrucciones
                    </button>
                </form>
                <div className="mt-6 text-center">
                    <Link href="/pagespublic/login" className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                        ← Volver al Inicio de Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ForgotPassword;