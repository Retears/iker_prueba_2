
import Dashboard from "@/components/Dashboard";
// import { fetchApi } from "@/lib/api";
import Image from "next/image";
// import { useEffect } from "react";

export default function Home() {

  // useEffect(() => {
  //   async function fetchApi() {
  //     try {
  //       const res = await fetch(`https://fakestoreapi.com/products`)
  //       if (!res.ok) {
  //         throw new Error(`Error: ${res.status}`);
  //       }
  //       const data = await res.json();
  //       console.log(data);
  //       return data;
  //     } catch (error) {
  //       console.error("Error en la petición:", error);
  //     }
  //   }
  //   fetchApi()
  // })

  
  return (
    <div className="flex ">
      <Dashboard />

    </div>
  );
}
