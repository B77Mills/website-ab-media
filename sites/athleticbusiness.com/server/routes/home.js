const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const home = require('@ab-media/theme/templates/index');
const queryFragment = require('@ab-media/theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
