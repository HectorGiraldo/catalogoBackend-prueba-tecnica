require('dotenv').config();
const express = require('express');
const cors = require('cors');

const { dbConnection } = require('./database/config');

// Creando el servidor
const app = express();

// Configurando CORS
app.use(cors());

// Lectura y parseo
app.use(express.json());

// Conexion BD
dbConnection();

// Rutas
app.use('/api/graphics', require('./routes/graphics'));
app.use('/api/search',   require('./routes/busqueda') );




app.listen( process.env.PORT, () => {
    console.log('Servidor corriendo en puerto ' + 3000);
});

