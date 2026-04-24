

export async function fetchApi() {
    try {
        const res = await fetch(`https://fakestoreapi.com/products`)
        if (!res.ok) {
            throw new Error(`Error: ${res.status}`);
        }
        const data = await res.json();
        console.log(data);
        return data;
    } catch (error) {
        console.error("Error en la petición:", error);
    }
}
