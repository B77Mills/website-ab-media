const { withWebsiteSection } = require('@parameter1/base-cms-marko-web/middleware');
const queryFragment = require('@ab-media/package-global/graphql/fragments/website-section-page');
// const postIdHandler = require('@ab-media/package-shared/middleware/post-id-handler');
const home = require('../templates/index');

module.exports = (app) => {
  app.get('/', withWebsiteSection({
    aliasResolver: () => 'home',
    template: home,
    queryFragment,
  }));
};
