import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
    const konzert = await prisma.konzert.findMany({});
    const tickets = await prisma.ticketkauf.findMany({});

    res.render("showSales", {tickets, konzert});
    });

export = router;