const express = require('express');
require('dotenv').config();
PORT = process.env.PORT || 3000;
const cors = require("cors");

require('./database/conexion');

const app = express();
app.use(cors())

app.use(express.urlencoded({ extended: true }));
app.use(express.json());

app.use('/', require('./routes/consultas'));

app.listen(PORT, () => {

    console.log(`Servidor corriendo en el puerto:${PORT}`)
});


