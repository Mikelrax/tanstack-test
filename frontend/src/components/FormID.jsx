import { useState } from "react";
import { useMutation } from "@tanstack/react-query";
import { getClientsByID } from "../services/getClientsByID";

const FormID = () => {
    const [id, setId] = useState("");

    const { mutate, data, isLoading, error } = useMutation({
        mutationFn: getClientsByID,
        onSuccess: (response) => console.log("Datos recibidos:", response),
        onError: (err) => console.error("Error en la petición:", err)
    });

    const handleSubmit = (e) => {
        e.preventDefault();
        if (!id.trim()) {
            alert("Por favor ingresa una ID válida");
            return;
        }
        mutate(id);
    };

    return (
        <form onSubmit={handleSubmit}>
            <label htmlFor="idInput">Ingresa una ID:</label>
            <input
                type="text"
                id="idInput"
                value={id}
                onChange={(e) => setId(e.target.value)}
                required
            />
            <button type="submit" disabled={isLoading}>
                {isLoading ? "Cargando..." : "Enviar"}
            </button>

            {error && <p style={{ color: "red" }}>Error: {error.message}</p>}
            {data && (
                <div>
                    <h3>Datos del Cliente</h3>
                    <p>Nombre: {data.name}</p>
                    <p>Email: {data.email}</p>
                </div>
            )}
        </form>
    );
};

export default FormID;