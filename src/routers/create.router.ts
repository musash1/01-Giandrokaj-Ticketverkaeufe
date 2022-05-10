import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
  res.render("salesRegister");
});

router.post("/", async (req, res) => {
    const sale = await prisma.ticketkauf.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        telefon: req.body.telefon,
        
      }
    })
  console.log(req.body.name);
  res.redirect("/ticket-erfassen");
});

export = router;
