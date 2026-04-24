import Boton from "./Boton";
import Image from "next/image";

export default function Lista({lista}){
    return(
      <div className="flex flex-col w-[300] bg-amber-400">
        <ol className="">
            <li className="py-1.5">
                <span>Nombre:</span> {lista.title}
                <Image
                src = {lista.image}
                width={300}
                height={300}
                />
                <p>{lista.price}</p>
                
            </li>

            <Boton detalles={lista}/>
        </ol>
        
        
      </div>  
    )
}