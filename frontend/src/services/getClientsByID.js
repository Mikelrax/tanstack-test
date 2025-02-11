const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getClientsByID = async (id) => {
    console.log(`Buscando cliente con ID: ${id}`);

    const response = await fetch(`${backendUrl}/client/${id}`);

    if (!response.ok) {
        console.error("Error:", await response.json());
        throw new Error(`Cliente con ID ${id} no encontrado`);
    }
    console.log("response.json()", response);
    return response.json();
};