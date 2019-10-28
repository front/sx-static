'use strict';
const path = require('path');
/* Create a new Fractal instance and export it for use elsewhere if required */
const fractal = module.exports = require('@frctl/fractal').create();

// Add custom filters
const mdAttrs = require('markdown-it-attrs');
const md = require('markdown-it')({
  html: true,
  xhtmlOut: true,
  typographer: true
}).use(mdAttrs);
const twigAdapter = require('@frctl/twig')({
  markdown(str) {
    return md.render(str);
  },
});


/* Set the title of the project */
fractal.set('project.title', 'StarterX static components');

/* Tell Fractal where the components will live */
fractal.components.set('path', __dirname + '/src/prototypes');

/* Tell Fractal where the documentation pages will live */
fractal.docs.set('path', __dirname + '/src/docs');

fractal.components.set('default.collator', (markup, item) => `<div class="row-space-small">${markup}</div>`);

/* Tell the Fractal web preview plugin where to look for static assets. */
fractal.web.set('static.path', path.join(__dirname, '/build'));

/* Loading template engines */
fractal.components.engine(twigAdapter); // use Nunjucks for components

fractal.components.set('ext', '.twig');

// Set default preview
fractal.components.set('default.preview', '@preview');

// Rename components label
fractal.components.set('label', 'components'); // default is 'Components'

// Set default pattern status
fractal.components.set('default.status', 'wip'); // default is 'ready'

// Enable BrowserSync globally
fractal.web.set('server.sync', true);

// Set build destination
fractal.web.set('builder.dest', __dirname + '/build-fractal');