import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/:id", async (req, res) => {
    
    const concerts = await prisma.konzert.findMany({});
    const ticket = await prisma.ticketkauf.findUnique({
        where: {
            id: Number(req.params.id)
        }
    });

    if (req.session != undefined) {
        if (req.session.loggedIn) {
            res.render("edit", {ticket, concerts});
        } else {
          res.send('Please login to view this page!');
        }
    } 
});
router.post("/:id", async (req, res) => {
    const ticket = await prisma.ticketkauf.update({
        where: {
            id: Number(req.params.id)
        },
        data: {
            name: req.body.name,
            email: req.body.email,
            telefon: req.body.telefon,
            treuebonus: Number(req.body.treuebonus),
            konzertId: Number(req.body.konzert),
            zahlungsstatus: req.body.zahlungsstatus,
        }
    })
    res.redirect("/ticket-anzeigen");
});
export = router;