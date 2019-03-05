const express = require("express");
const nodemailer = require("nodemailer");
const router = express.Router();

router.post("/", req => {
  const {name, email, message} = req.body;
  const smtpTrans = nodemailer.createTransport({
    service: "Outlook365",
    auth: {
      user: "account.email@example.com",
      pass: "smtp-password"
    }
  });

  const mailOptions = {
    from: `${name} &lt;${email}&gt;`,
    to: "info@22px.io",
    subject: `Contact from website - ${email}`,
    text: message
  };

  smtpTrans.sendMail(mailOptions, (err, res) => {
    if (err) {
      res.status(500).render("error", {
        message: "Whoops!",
        error: err
      });
    } else {
      res.render("contact-success");
    }
  });
});

module.exports = router;
