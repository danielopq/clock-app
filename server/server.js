// server/server.js
const express = require('express');
const fetch = require('node-fetch');
const cors = require('cors');
require('dotenv').config();  // Para cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 5000;  // El puerto para el servidor

// Habilitar CORS para que el frontend pueda hacer solicitudes
app.use(cors({
    origin: 'http://localhost:5173', // Cambia este puerto si tu frontend usa otro
    methods: ['GET', 'POST', 'OPTIONS'],
    allowedHeaders: ['Content-Type', 'Authorization'],
}));

// Ruta para obtener una cita aleatoria de la API de FavQs
app.get('/api/getQuote', async (req, res) => {
    const url = 'https://favqs.com/api/qotd';
    const apiKey = process.env.FAVQ_API_KEY;  // La clave API almacenada en .env

    try {
        const response = await fetch(url, {
            headers: {
                'Authorization': `Token token="${apiKey}"`,
            },
        });

        if (!response.ok) {
            throw new Error('Error fetching the quote');
        }

        const data = await response.json();
        res.json(data.quote);  // Enviar la cita al frontend
    } catch (err) {
        console.error(err);
        res.status(500).json({ error: 'Failed to fetch quote' });
    }
});

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Server is running on http://localhost:${PORT}`);
});
