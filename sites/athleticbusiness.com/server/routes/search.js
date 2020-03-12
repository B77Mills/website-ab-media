const template = require('@ab-media/theme/templates/search');

module.exports = (app) => {
  app.get('/search', (_, res) => { res.marko(template); });
};
