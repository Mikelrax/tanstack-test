import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { clients } from "./clients.js";


dotenv.config();
const app = express();

app.use(cors());
app.use(express.json());

app.get("/client/:id", async (req, res) => {
    const { id } = req.params;

    // Simula una consulta con retraso de 3 segundos
    setTimeout(() => {
        const client = clients[id];

        if (!client) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json(cliente);
    }, 3000);
});

app.get("/clientes", async (req, res) => {
    res.json(clients);
});

app.get("/", (req, res) => {
    res.json({ message: "llamada con éxito" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));