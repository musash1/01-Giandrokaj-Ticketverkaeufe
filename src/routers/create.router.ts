import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
  const concerts = await prisma.konzert.findMany({});
  res.render("salesRegister", {concerts});
});

router.post("/", async (req, res) => {

  const sale = await prisma.ticketkauf.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        telefon: req.body.telefon,
        konzertId: Number(req.body.konzert),
        treuebonus: 0,
      }
    })
  res.redirect("/ticket-erfassen");
});

export = router;
