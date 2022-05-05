import express from "express";
import { PrismaClient } from "@prisma/client";

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
  res.render(__dirname + '/public/views/index.ejs');
});

app.set("view engine", "ejs");

app.listen(port, () => console.log(`Example app listening on port ${port}!`));
