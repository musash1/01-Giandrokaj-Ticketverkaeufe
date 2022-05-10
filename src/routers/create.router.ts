import express from 'express'

let router = express.Router();

router.get("/", async (req, res) => {
  res.render("salesRegister");
});

router.post("/", async (req, res) => {
  console.log(req.body.konzert);
  res.redirect("/ticket-erfassen");
});

export = router;
