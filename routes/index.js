const express = require("express");
const router = express.Router();
const Page = require("../services/page");

router.get("/", (req, res) => {
  res.locals.pages = Page.getAll();
  res.locals.pages[0].isActive = true;

  res.render("index", {title: Page.TITLE});
});

router.get("/99/data", (req, res) => {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
  res.status(200).json({
    "theNineNine": [
      {
        "firstName": "Chris",
        "lastName": "James",
        "role": "Gaffa"
      },
      {
        "firstName": "Osh",
        "lastName": "Slomczynski",
        "role": "Polish ambassador"
      },
      {
        "firstName": "Lisa",
        "lastName": "McCormack",
        "role": "Nut milk enthusiast"
      },
      {
        "firstName": "Riya",
        "lastName": "Dattani",
        "role": "Creative accountant"
      },
      {
        "firstName": "Rick",
        "lastName": "Clegg",
        "role": "Town crier"
      }
    ]
  });
});

router.get("/about", (req, res) => {
  res.locals.pages = Page.getAll();
  res.locals.pages[1].isActive = true;

  res.render("about", {title: Page.createPageTitle("About")});
});

router.get("/training", (req, res) => {
  res.locals.pages = Page.getAll();
  res.locals.pages[2].isActive = true;

  res.render("training", {title: Page.createPageTitle("Training")});
});

router.get("/cookiepolicy", (req, res) => {
  res.render("cookie-policy", {title: Page.createPageTitle("Cookie Policy")});
});

router.get("/privacypolicy", (req, res) => {
  res.render("privacy-policy", {title: Page.createPageTitle("Privacy Policy")});
});

module.exports = router;
