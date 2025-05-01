// server.js (exemplo backend)
import express from "express";
import nodemailer from "nodemailer";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());

app.post("/send", async (req, res) => {
  const { name, email, subject, message } = req.body;

  const transporter = nodemailer.createTransport({
    service: "Gmail",
    auth: {
      user: "SEU_EMAIL@gmail.com",
      pass: "SENHA_DO_APP" // use senha de app do Gmail
    }
  });

  try {
    await transporter.sendMail({
      from: email,
      to: "SEU_EMAIL@gmail.com",
      subject: `Contato do Portfólio: ${subject}`,
      text: `Nome: ${name}\nEmail: ${email}\nMensagem:\n${message}`
    });
    res.status(200).send("Enviado com sucesso!");
  } catch (error) {
    res.status(500).send("Erro ao enviar: " + error.message);
  }
});

app.listen(3000, () => console.log("Servidor rodando na porta 3000"));
