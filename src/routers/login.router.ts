import { PrismaClient } from "@prisma/client";
import express from "express";
const session = require('express-session');
const path = require('path');

const prisma = new PrismaClient;
let router = express.Router();

router.get("/", async (req, res) => {
    res.render("login", {});
});

router.use(session({
	secret: 'secret',
	resave: true,
	saveUninitialized: true
}));
router.use(express.json());
router.use(express.urlencoded({ extended: true }));
router.use(express.static(path.join(__dirname, 'static')));

router.post("/", async (req, res) => {
    const user = await prisma.users.findUnique({
        where: {
            name: req.body.username,
        }
    })

    let username = req.body.username;
    let password = req.body.password;
    
    if (username && password) {
        if (user?.password == req.body.password) {
            if (req.session != undefined) {
                req.session.loggedIn = true;
                req.session.username = username;
            }
            res.redirect("/ticket-erfassen")
        } else {
            res.send('Incorrect Username and/or Password!')
        }
        res.end();
    } else {
        res.send('Please enter Username and Password!');
		res.end();
    }
});


export = router;