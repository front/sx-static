# sx-static


Styling and flat html demo (gh-pages) for sx-wp and sx-d8. It supports twig templating engin and compiles them into plain html files.

This repo also comes with webpack for compiling Sass and javascript files, browsersync and Fractal which is a nice tools for buildintg nice and modern styleguides.


# Available commands 

##### Run developement environment with watch and browsersync 

```bash
npm run dev
```

##### Run developement environment with watch for changes also generate styleguide with browsersync

```bash
npm start
```

##### Build for production

```bash
npm run build
```

##### Build styleguide

```bash
npm run fractal:build
```

##### Watch styleguide files

```bash
npm run fractal
```
This command generates twig files under `/src/prototypes/` into a feature-reach styleguide.


##### Deploy to gh-pages

```bash
npm run deploy
```
This command will compile all twig, js and cass files, then copies all necessary files for running styleguide into `gh-pages` branch and poshes to the remote repo.