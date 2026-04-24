import Contenido from "./Contenido";
import Lista from "./Lista";


export default function Dashboard(){
    return(
      <div className="flex flex-col flex-1 min-h-screen p-3.5">
        <Contenido/>
      </div>  
    )
}