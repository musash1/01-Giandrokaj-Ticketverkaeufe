import { PrismaClient } from "@prisma/client";
import express from "express";

const prisma = new PrismaClient;
let router = express.Router();

router.get("/", async (req, res) => {
    res.render("login", {});
});

router.post("/", async (req, res) => {
    const user = await prisma.users.findUnique({
        where: {
            name: req.body.username,
        }
    })
    
    if (user?.password == req.body.password) {
        res.redirect("/ticket-erfassen")
    } else {
        res.redirect("/")
    }
});

export = router;