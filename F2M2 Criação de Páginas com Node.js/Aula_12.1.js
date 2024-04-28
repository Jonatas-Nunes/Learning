const express = require('express');
const app = express();
const nodemailer = require('nodemailer');
const porta = 443;

app.get('/', (req, res) => {
    res.send('Enviando e-mail com o Nodemailer!');
});

app.get('/sendemail', async (req, res) => {
    var transport = nodemailer.createTransport({
        host: "sandbox.smtp.mailtrap.io",
        port: 2525,
        auth: {
            user: "b8745cc5362aaa",
            pass: "8641a4f330fad1"
        }
    });


    var message = {
        from: "noreply@reporgrame-se.com",
        to: "reprograme-se@reprograme-se.com",
        subject: "Instrução para recuperar a senha",
        text: "Jônatas. \n\n Você solicitou alteração de senha. \n\nEquipe Reprograme-se",
        html: "Prezado Jônatas <br><br> Você solicitou alteração de senha. <br><br>Equipe reprograme-se<br>",
    };

    transport.sendMail(message, (err) => {
        if (err) {
            return res.status(400).json({
                erro: true,
                mensagem: 'Erro: E-mail não enviado!'
            });
        } else {
            return res.json({
                erro: false,
                mensagem: 'E-mail enviado com sucesso!'
            });
        }
    });

});

app.listen(porta, () => {
    console.log('Servidor rodando!');
    const url = `http://localhost:${porta}`;
    import('open').then(open => open.default(url))
});