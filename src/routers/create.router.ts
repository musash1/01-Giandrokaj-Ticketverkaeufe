import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
  const concerts = await prisma.konzert.findMany({});
  res.render("salesRegister", {concerts});
});

router.post("/", async (req, res) => {
  let zahlungsdatum = String(new Date().toLocaleDateString("de-DE"));
  let zahlenBisDatum = new Date(new Date().getTime() + (2592000000 / 30 * Number(req.body.treuebonus))).toLocaleDateString("de-DE");
  const sale = await prisma.ticketkauf.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        telefon: req.body.telefon,
        konzertId: Number(req.body.konzert),
        treuebonus: Number(req.body.treuebonus),
        zahlungsstatus: req.body.zahlungsstatus,
        kaufdatum: zahlungsdatum,
        zahlenBisDatum: String(zahlenBisDatum),
      }
    })
  res.redirect("/ticket-erfassen");
});

export = router;
