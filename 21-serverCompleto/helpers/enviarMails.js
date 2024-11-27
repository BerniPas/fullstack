const nodemailer = require("nodemailer");
const dotenv = require('dotenv');
dotenv.config();

const GOOGLE_EMAIL = process.env.GOOGLE_EMAIL;
const GOOGLE_PASSWORD = process.env.GOOGLE_PASSWORD;


//configuramos el transporter = la empresa/aplicaión que envía el mail
const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 465,
    secure: true, // true for port 465, false for other ports
    auth: {
        user: GOOGLE_EMAIL,
        pass: GOOGLE_PASSWORD,
    },
});

// async..await is not allowed in global scope, must use a wrapper
const enviarMail = async (email, nombre) => {
    // send mail with defined transport object
    const info = await transporter.sendMail({
        from: '"Maddison Foo Koch 👻" <pastor.bernal@educacionit.com>', // sender address
        to: `${email}`, // list of receivers
        subject: "Hola ✔", // Subject line
        text: "Hello world?", // plain text body
        html: `<h1>Hola ${nombre}gracias por registrarte en nuestra web!</h1><br>
        <h2>Puedes visitarnos para tus compras en nuestro sitio 
        <a href='https://www.educacionit.com/' target='_blank'>Educación IT</a> </h2>`, // html body
    });

    console.log("Message sent: %s", info.messageId);
    // Message sent: <d786aa62-4e0a-070a-47ed-0b0666549519@ethereal.email>
}

module.exports = enviarMail;