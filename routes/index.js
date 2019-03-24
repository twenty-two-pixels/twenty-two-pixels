const express = require("express");
const router = express.Router();
const Page = require("../services/page");

router.get("/", (req, res) => {
  res.locals.pages = Page.getAll();
  res.locals.pages[0].isActive = true;

  res.render("index", {title: Page.TITLE});
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
