'use client';
import { useRouter } from 'next/navigation'
import { supabase } from '@/utils/supabase'
import { useEffect,useState } from 'react'

const NavbarColegioCercano = () => {

    const router = useRouter();
    const [userLoged, setuserLoged] = useState(false);

    const handleRedirectHome = () => {
        router.push('/');
    }
    const handleRedirectLogin = () => {
        router.push('/pagespublic/login');
    }
    const handleRedirectRegister = () => {
        router.push('/pagespublic/register');
    }

    useEffect(() => {

        async function sessionNow() {
            const { data, error } = await supabase.auth.getSession()
            if (error) {
                
                setuserLoged(false)                
                router.push('/pagespublic/login')
                return
            }
            if(!data.session){                
                setuserLoged(false) 
                router.push('/pagespublic/login')                               
                return
            }
            setuserLoged(true)            
        }
        sessionNow();        
    }, [])

    const handleCloseSesion = () => {
        async function closeSesion() {
            
            const session = await supabase.auth.getSession();

            if(session){
                const { error } = await supabase.auth.signOut();
                if (error) {
                    console.log("no pudo cerrar sesion",error,error.message)
                    return
                }
                router.push('/pagespublic/login')
            }else{
                console.log("no hay sesion para cerrar")
            }
            
        } 
        closeSesion();
        
    }


    return (
        <nav className="sticky top-0 z-50 backdrop-blur-md bg-white/70 border-b border-gray-200">
            <div className="max-w-7xl mx-auto px-6 py-4">
            <div className="flex justify-between items-center">
                <button onClick={handleRedirectHome} className="flex items-center space-x-2">
                    <div className="h-10 w-10 bg-gradient-to-r from-blue-500 to-blue-600 rounded-lg flex items-center justify-center">
                        <span className="text-2xl font-bold text-white">E</span>
                    </div>
                    <span className="text-2xl font-bold bg-gradient-to-r from-blue-600 to-blue-800 bg-clip-text text-transparent">
                        EduColombia 
                    </span>
                </button>
                {
                userLoged ? (
                    
                    <button onClick={handleCloseSesion} className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                        Cerrar Sesión
                    </button>
                ):(
                    <div className="flex gap-4 items-center">
                        <button onClick={handleRedirectLogin} className="px-4 py-2 text-blue-600 hover:text-blue-800 transition-colors duration-300">
                            Iniciar Sesión
                        </button>
                        <button onClick={handleRedirectRegister} className="px-6 py-2 bg-gradient-to-r from-blue-600 to-blue-700 text-white rounded-full hover:shadow-lg transform hover:-translate-y-0.5 transition-all duration-300">
                            Registrarse
                        </button>
                    </div>
                )}
                
            </div>
            </div>
        </nav>
    );
};

export default NavbarColegioCercano;