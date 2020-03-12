const { withWebsiteSection } = require('@base-cms/marko-web/middleware');
const section = require('@ab-media/theme/templates/website-section');
const contactUs = require('@ab-media/theme/templates/website-section/contact-us');
const ebooks = require('@ab-media/theme/templates/website-section/ebooks');
const podcasts = require('@ab-media/theme/templates/website-section/podcasts');
const webinars = require('@ab-media/theme/templates/website-section/webinars');
const whitepapers = require('@ab-media/theme/templates/website-section/whitepapers');
const queryFragment = require('@ab-media/theme/graphql/fragments/website-section-page');

module.exports = (app) => {
  app.get('/:alias(contact-us)', withWebsiteSection({
    template: contactUs,
    queryFragment,
  }));
  app.get('/:alias(ebooks)', withWebsiteSection({
    template: ebooks,
    queryFragment,
  }));
  app.get('/:alias(webcast)', withWebsiteSection({
    template: webinars,
    queryFragment,
  }));
  app.get('/:alias(podcast)', withWebsiteSection({
    template: podcasts,
    queryFragment,
  }));
  app.get('/:alias(whitepapers)', withWebsiteSection({
    template: whitepapers,
    queryFragment,
  }));
  app.get('/:alias([a-z0-9-/]+)', withWebsiteSection({
    template: section,
    queryFragment,
  }));
};
