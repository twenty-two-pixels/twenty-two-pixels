const express = require('express');
const router = express.Router();

const TITLE = 'Twenty Two Pixels';

function createPageTitle(page) {
  return `${TITLE} | ${page}`;
}

/* GET home page. */
router.get('/', function(req, res) {
  res.render('index', { title: TITLE });
});

router.get('/cookiepolicy', function (req, res) {
  res.render('cookie-policy', {title: createPageTitle('Cookie Policy')});
});

router.get('/privacypolicy', function (req, res) {
  res.render('privacy-policy', {title: createPageTitle('Privacy Policy')});
});

module.exports = router;
