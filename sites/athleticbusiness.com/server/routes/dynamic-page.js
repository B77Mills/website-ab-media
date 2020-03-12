const { withDynamicPage } = require('@base-cms/marko-web/middleware');
const page = require('@ab-media/theme/templates/dynamic-page');
const queryFragment = require('@ab-media/theme/graphql/fragments/dynamic-page');

module.exports = (app) => {
  app.get('/page/:alias(*)', withDynamicPage({
    template: page,
    queryFragment,
  }));
};
