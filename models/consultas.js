const mongoose = require('mongoose');

const schema = mongoose.Schema({
    nombre: {
        type: 'string',
        required: true,
    },
    email: {
        type: 'string',
        required: true
    },
    whatsapp: {
        type: 'number',
        required: true
    },
    fecha_ingreso: {
        type: 'Date',
        required: true
    },
    fecha_salida: {
        type: 'Date',
        required: true
    },
    mensaje: {
        type: 'string',
        required: true
    },
    timestamp: {
        type: 'Date',
        default: new Date()
    },

});
const Consulta = mongoose.model('consultas', schema);

module.exports = Consulta;