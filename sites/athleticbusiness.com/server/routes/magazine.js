const { withMagazineIssue, withMagazinePublication } = require('@base-cms/marko-web/middleware');
const index = require('@ab-media/theme/templates/magazine');
const publication = require('@ab-media/theme/templates/magazine/publication');
const publicationFragment = require('@ab-media/theme/graphql/fragments/magazine-publication-page');
const issue = require('@ab-media/theme/templates/magazine/issue');
const issueFragment = require('@ab-media/theme/graphql/fragments/magazine-issue-page');

module.exports = (app) => {
  app.get('/magazine', (req, res) => {
    res.marko(index);
  });

  app.get('/magazine/:id([a-fA-F0-9]{24})', withMagazinePublication({
    template: publication,
    queryFragment: publicationFragment,
  }));

  app.get('/magazine/:id(\\d+)', withMagazineIssue({
    template: issue,
    queryFragment: issueFragment,
  }));
};
