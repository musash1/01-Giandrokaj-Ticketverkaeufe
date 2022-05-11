import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/:id", async (req, res) => {
    const toDeletTicket = await prisma.ticketkauf.delete({
        where: {
            id: Number(req.params.id)
        }
    })

    if (req.session != undefined) {
        if (req.session.loggedIn) {
            res.redirect("/ticket-anzeigen");
        } else {
          res.send('Please login to view this page!');
        }
    } 
});

export = router;