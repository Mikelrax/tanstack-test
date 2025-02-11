const backendUrl = import.meta.env.VITE_BACKEND_URL;

export const getClients = async () => {
    console.log("llamando clientes")
    console.log("backendUrl", backendUrl)
    const response = await fetch(`${backendUrl}/clients`);
    if (!response.ok) {
        const errorData = await response.json();
        console.error("Error:", errorData);
    }
    return response.json();
};
