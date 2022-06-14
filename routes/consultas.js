// Rutas para producto
const express = require('express');
const router = express.Router();
const consultaController = require('../controllers/consultas');

// api/productos
router.post('/', consultaController.crearConsulta);
router.get('/', consultaController.obtenerConsultas);
router.put('/:id', consultaController.actualizarConsulta);
router.delete('/:id', consultaController.eliminarConsulta);

module.exports = router;