import Contenido from "@/components/Contenido";
import { fetchApi } from "@/lib/api";

export async function generateMetadata({ params }) {
    const { id } = await params;
    const peli = await fetchApi(id)
    return {
        title: `Pepeflix | ${peli.title} `,
        description: `${peli.description}`
    };
}

export async function DetalleProducto({params}){
    const { id } = await params;

    const det = await fetchApi(id)
    return <Contenido det={det}/>
}