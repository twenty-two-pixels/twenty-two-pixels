const express = require("express");
const nodemailer = require("nodemailer");
const htmlencode = require("htmlencode");
// eslint-disable-next-line
const router = express.Router();
const Page = require("../services/page");

function renderContactView(res, isSuccess = false, isError = false) {
  res.render("contact", {
    title: Page.createPageTitle("Contact"),
    isSuccess,
    isError
  });
}

function getMailText(mailFrom, name, message) {
  const safeMsg = htmlencode.htmlEncode(message)
    .split("&#13;&#10;")
    .join("\n");

  return `FROM: ${mailFrom}\nNAME: ${name}\nMESSAGE:\n${safeMsg}`;
}

router.get("/", (req, res) => renderContactView(res));

router.post("/", async (req, res) => {
  const {name, email, message} = req.body;
  const smtpTrans = nodemailer.createTransport({
    service: process.env.MAIL_SERVICE,
    auth: {
      user: process.env.MAIL_USR,
      pass: process.env.MAIL_PASS
    }
  });

  try {
    await smtpTrans.sendMail({
      from: process.env.MAIL_FROM,
      to: process.env.MAIL_TO,
      subject: `Contact from website - ${email}`,
      text: getMailText(email, name, message)
    });
    renderContactView(res, true);
  } catch (err) {
    renderContactView(res, false, true);
  }
});

module.exports = router;
