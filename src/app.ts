import express from "express";
import { PrismaClient } from "@prisma/client";
import path from 'path';

const app = express();
const prisma = new PrismaClient();
const port = 3000;

app.get("/", async (req, res) => {
  const ticketkauf = await prisma.ticketkauf.create({
    data: {
      name: "Alejandro",
      email: "alejandro.facal@bluewin.ch",
      telefon: "079-1234567",
      treuebonus: 0.3,
      konzert: "Sido",
    }
  });
  res.render(__dirname + '/views/salesRegister.ejs');
});

app.set("view engine", "ejs");

app.use(express.static(path.join(__dirname, '/public')));

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
