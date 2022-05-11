import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
    const konzert = await prisma.konzert.findMany({});
    const tickets = await prisma.ticketkauf.findMany({
        where: {
            name: (req?.session?.username)
        }
    });
    if (req.session)
    tickets.sort((a: any, b: any) => {return new Date(a.kaufdatum).valueOf() - new Date(b.kaufdatum).valueOf()})

    if (req.session != undefined) {
        if (req.session.loggedIn) {
            res.render("boughtTicketUser", {tickets, konzert});
        } else {
          res.send('Please login to view this page!');
        }
    } 
});

export = router;