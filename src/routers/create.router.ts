import { prisma } from '@prisma/client';
import express from 'express'

let router = express.Router();

router.get("/", async (req, res) => {
  res.render("salesRegister");
});

router.post("/", async (req, res) => {
    const sale = await prisma.ticketkauf.create({
        data:{

        }
    })
  console.log(req.body.name);
  res.redirect("/ticket-erfassen");
});

export = router;
