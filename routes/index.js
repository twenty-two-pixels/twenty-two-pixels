const express = require('express');
const router = express.Router();

const TITLE = 'Twenty Two Pixels';

function createPageTitle(page) {
  return `${TITLE} | ${page}`;
}

router.get('/', (req, res) => {
  res.render('index', { title: TITLE });
});

router.get('/cookiepolicy', (req, res) => {
  res.render('cookie-policy', {title: createPageTitle('Cookie Policy')});
});

router.get('/privacypolicy', (req, res) => {
  res.render('privacy-policy', {title: createPageTitle('Privacy Policy')});
});

module.exports = router;
