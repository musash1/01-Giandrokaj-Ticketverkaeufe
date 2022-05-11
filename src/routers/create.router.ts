import express from "express";
import { PrismaClient } from "@prisma/client";
import { body, check, validationResult } from "express-validator";

const session = require("express-session");
const path = require("path");

let router = express.Router();
const prisma = new PrismaClient();

router.get("/", async (req, res) => {
  const concerts = await prisma.konzert.findMany({});
  if (req.session != undefined) {
    if (req.session.loggedIn) {
      if (req.session.username === "admin") {
        res.render("salesRegister", { concerts });
      } else {
        res.send("You are not privileged to view this page!");
      }
    } else {
      res.send("Please login to view this page!");
    }
  }
});

router.post(
  "/",
  body("name").isLength({ min: 3, max: 30 }).not().isEmpty().withMessage("Name is required"),
  body("email").isEmail().not().isEmpty().withMessage("Email is required"),
  body("konzert").isLength({ min: 1, max: 3 }).not().isEmpty().withMessage("Konzert is required"),
  async (req, res) => {
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
      res.redirect('/404')
    }

    let zahlungsdatum = String(new Date().toLocaleDateString("de-DE"));
    let zahlenBisDatum = new Date(
      new Date().getTime() + (2592000000 / 30) * Number(req.body.treuebonus)
    ).toLocaleDateString("de-DE");

    const sale = await prisma.ticketkauf.create({
      data: {
        name: req.body.name,
        email: req.body.email,
        telefon: req.body.telefon,
        konzertId: Number(req.body.konzert),
        treuebonus: Number(req.body.treuebonus),
        zahlungsstatus: req.body.zahlungsstatus,
        kaufdatum: zahlungsdatum,
        zahlenBisDatum: String(zahlenBisDatum),
      },
    });
    res.redirect("/ticket-erfassen");
  }
);

export = router;
