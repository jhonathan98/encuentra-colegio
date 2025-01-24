'use client';
import Link from 'next/link';
import { supabase } from '@/utils/supabase';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

const ResetPassword: React.FC = () => {

    const [newPassword, setNewPassword] = useState<string>('');
    const [confirmPassword, setConfirmPassword] = useState<string>('');
    const [error, setError] = useState<string>('');
    const route = useRouter();

    const reestablecePassword = async (e: React.FormEvent) => {
        e.preventDefault();
        if(newPassword !== confirmPassword) {
            setError('Las contraseñas no coinciden');
            return;
        }

        const response = await supabase.auth.updateUser({ password: newPassword })
        if(response.error) {
            setError(response.error.message);
            return;
        }
        if(response.data) {
            route.push('/pagespublic/login');
        }
    }

    return (
        <div className="min-h-screen flex items-center justify-center bg-gradient-to-r from-blue-500 to-purple-600">
            <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md transform transition-all duration-300 hover:scale-105">
                <h2 className="text-3xl font-extrabold text-gray-900 text-center mb-6">Reestablecer Contraseña</h2>
                <p className="text-gray-600 text-center mb-8">
                    Ingresa tu nueva contraseña y confírmala para completar el proceso.
                </p>
                <form onSubmit={reestablecePassword}>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="newPassword">
                            Nueva Contraseña
                        </label>
                        <input
                            type="password"
                            id="newPassword"
                            value={newPassword}
                            onChange={(e) => setNewPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300"
                            placeholder="Ingresa tu nueva contraseña"
                            required
                        />
                    </div>
                    <div className="mb-6">
                        <label className="block text-gray-700 text-sm font-semibold mb-2" htmlFor="confirmPassword">
                            Repetir Contraseña
                        </label>
                        <input
                            type="password"
                            id="confirmPassword"
                            value={confirmPassword}
                            onChange={(e) => setConfirmPassword(e.target.value)}
                            className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:border-blue-500 focus:outline-none focus:ring-2 focus:ring-blue-200 transition duration-300"
                            placeholder="Repite tu nueva contraseña"
                            required
                        />
                    </div>
                    <button
                        type="submit"
                        className="w-full bg-blue-600 text-white py-3 px-4 rounded-lg font-semibold hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 transition duration-300"
                    >
                        Reestablecer Contraseña
                    </button>
                </form>
                <div className="text-center">
                    {error && <p style={{ color: 'red' }}>{error}</p>}
                </div>
                <div className="mt-4 text-center">
                    <Link href="/pagespublic/login" className="text-sm text-blue-600 hover:text-blue-800 font-semibold">
                        ← Volver al Inicio de Sesión
                    </Link>
                </div>
            </div>
        </div>
    );
};

export default ResetPassword;