import dynamic from 'next/dynamic';

const DynamicMap = dynamic(() => import('./ClienteMap'), {
    loading: () => <div>Cargando...</div>,
});

export default function Mapa(props) {
    return (
        <DynamicMap {...props}/>
    );
}