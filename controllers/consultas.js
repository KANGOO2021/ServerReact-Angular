const Consulta = require("../models/consultas");
const nodemailer = require('nodemailer');

exports.crearConsulta = async(req, res) => {
    const { nombre, email, whatsapp, fecha_ingreso, fecha_salida, mensaje } = req.body;
    try {
        let consulta;


        consulta = new Consulta(req.body);

        await consulta.save();
        res.send(consulta);
        console.log(req.body);

        async function main() {
            let transporter = nodemailer.createTransport({
                host: "smtp.gmail.com",
                port: 465,
                secure: true,
                auth: {
                    user: "ser2016munoz@gmail.com",
                    pass: "mwlsgphiljaccajb",
                }
            });
            let info = await transporter.sendMail({
                from: `${nombre} <${email}>`,
                to: "ser2004munoz@yahoo.com.ar",
                subject: "SanCleResidenicas",
                html: `La nueva consulta es: <br>
                                Nombre: ${nombre} <br>
                                Email: ${email} <br>
                                Teléfono: ${whatsapp} <br>
                                Fecha de ingreso: ${fecha_ingreso} <br>
                                Fecha de salida: ${fecha_salida} <br>
                                Mensaje: ${mensaje} <br>`
            });

        }
        main().catch(console.error);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.obtenerConsultas = async(req, res) => {

    try {

        const consultas = await Consulta.find().lean();
        res.json(consultas)

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }

}

exports.actualizarConsulta = async(req, res) => {

    try {
        const { nombre, email, whatsapp, fecha_ingreso, fecha_salida, mensaje } = req.body;
        let consulta = await Consulta.findById(req.params.id);

        if (!consulta) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        consulta.nombre = nombre;
        consulta.email = email;
        consulta.whatsapp = whatsapp;
        consulta.fecha_ingreso = fecha_ingreso;
        consulta.fecha_salida = fecha_salida;
        consulta.mensaje = mensaje;

        consulta = await Consulta.findOneAndUpdate({ _id: req.params.id }, consulta, { new: true })
        res.json(consulta);

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}

exports.eliminarConsulta = async(req, res) => {

    try {
        let consulta = await Consulta.findById(req.params.id);

        if (!consulta) {
            res.status(404).json({ msg: 'No existe el producto' })
        }

        await Consulta.findOneAndRemove({ _id: req.params.id })
        res.json('Consulta eliminada con exito');

    } catch (error) {
        console.log(error);
        res.status(500).send('Hubo un error');
    }
}