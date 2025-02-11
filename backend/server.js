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
    console.log("llamando cliente con id", id)
    setTimeout(() => {
        const client = clients[id];

        if (!client) {
            return res.status(404).json({ error: "Cliente no encontrado" });
        }

        res.json(client);
        console.log("client", client);
    }, 1);
});

app.get("/clients", async (req, res) => {
    setTimeout(() => {
        res.json(clients);
    }, 3000);
});

app.get("/", (req, res) => {
    res.json({ message: "llamada con éxito" });
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Servidor corriendo en puerto ${PORT}`));