class Page {
  static createPageTitle(page) {
    return `${Page.TITLE} | ${page}`;
  }
}

Page.TITLE = "Twenty Two Pixels";

module.exports = Page;
