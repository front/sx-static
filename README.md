# sx-static


Styling and flat html demo (gh-pages) for sx-wp and sx-d8. It supports twig templating engin and compiles them into plain html files.

# Available commands 

##### Run developement environment with watch and browsersync 

```bash
npm run dev
```

##### Build for production

```bash
npm run build
```

##### Deploy to gh-pages

```bash
npm run deploy
```
This command will compile all twig, js and cass files, then copies all `/build` directory content into `gh-pages` branch and poshes to the remote repo.