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
    res.render("edit", {ticket, concerts});
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
            treuebonus: req.body.treuebonus,
            konzertId: req.body.konzert,
        }
    })
});
export = router;