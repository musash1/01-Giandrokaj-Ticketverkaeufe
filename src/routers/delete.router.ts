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
    res.redirect("/ticket-anzeigen");
});

export = router;