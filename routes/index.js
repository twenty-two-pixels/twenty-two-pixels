const express = require("express");
const router = express.Router();
const Page = require("../services/page");

router.get("/", (req, res) => {
  res.locals.pages = Page.getAll();
  res.locals.pages[0].isActive = true;

  res.render("index", {title: Page.TITLE});
});

router.get("/cookiepolicy", (req, res) => {
  res.render("cookie-policy", {title: Page.createPageTitle("Cookie Policy")});
});

router.get("/privacypolicy", (req, res) => {
  res.render("privacy-policy", {title: Page.createPageTitle("Privacy Policy")});
});

module.exports = router;
