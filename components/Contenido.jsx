import { fetchApi } from "@/lib/api"
import Lista from "./Lista"

export default async function Contenido() {
    const resultados  = await fetchApi() // Array


    return (
        <div>
            <h1>Nombre producto</h1>
            {
                resultados ?
                    <>
                    {
                        resultados.map( p => <Lista key={p.id} lista={p}/>)
                    }
                    </>
                    :
                    "cargando"
            }


        </div>
    )
}