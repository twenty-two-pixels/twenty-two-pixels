const {PAGES} = require("../constants");

class Page {
  static createPageTitle(page) {
    return `${Page.TITLE} | ${page}`;
  }

  static getAll() {
    return JSON.parse(JSON.stringify(PAGES));
  }

  static applyResGlobals() {
    return function applyResGlobals(req, res, next) {
      res.locals.pages = Page.getAll();

      for (const page of res.locals.pages) {
        page.isActive = page.href === req.url;
      }

      next();
    };
  }
}

Page.TITLE = "Twenty Two Pixels";

module.exports = Page;
