import express from 'express'
import { PrismaClient } from '@prisma/client'

let router = express.Router();
const prisma = new PrismaClient;

router.get("/", async (req, res) => {
    res.render("error");
});

export = router;    