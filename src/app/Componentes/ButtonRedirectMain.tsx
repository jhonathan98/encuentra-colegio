'use client';

import { useRouter } from 'next/navigation'

const ButtonRedirectMain = () => {

    const router = useRouter();

    const handleRedirect = () => {
        router.push('/mapa');
    }

    return(
        <button onClick={handleRedirect} className="absolute top-4 right-4 px-4 py-2 bg-white text-gray-800 rounded-full shadow-md hover:shadow-lg transition-all duration-300">
            Redirecciona Pagina mapa
        </button>
    )
}

export default ButtonRedirectMain;