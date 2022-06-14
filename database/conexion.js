require('dotenv').config();
const mongoose = require('mongoose');

const uriAtlas = process.env.MONGO_ATLAS;

const connection = mongoose.connect(uriAtlas, {
    useNewUrlParser: true,
    useUnifiedTopology: true,

});

mongoose.connection.on('connected', () => {
    console.log('[Mongoose] - conectado en: ', uriAtlas);
});

mongoose.connection.on('error', (err) => {
    console.log(`Mongoose connection error: ${err}`);
});

module.exports = connection;