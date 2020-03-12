const { withContent } = require('@base-cms/marko-web/middleware');
const content = require('@ab-media/theme/templates/content');
const queryFragment = require('@ab-media/theme/graphql/fragments/content-page');

module.exports = (app) => {
  app.get('/*?:id(\\d{8})*', withContent({
    template: content,
    queryFragment,
  }));
};
