# finir

> A completion app.

fenir mean 'to finish'. This is a personal completion app, customized to my daily needs.

## Goals

* Color as a motivator
* [IKEA Effect](https://en.wikipedia.org/wiki/IKEA_effect) + 'Yet Another Todo'
* Ambiguous rewards
* Tease tomorrow
* Make software that forgives

## Concepts

* Every day brings a new color, a new chance
* Every day should be completable
* Streaks are a *reflection* of the reward, not the reward itself
* Anti-data: you cannot interact with the past

## Thoughts

It's amazing how different an experience can be when you aren't mining data..

A todo list is the developer equivalent of an industrial designer's chair..

Naming concepts frames everything. 'Challenges' vs 'Todos'..

The icons may be pushing too hard into 'Fear of Missing Out'..

When was the last time an app or service _forgave_ you?..

## Build Setup

``` bash
# install dependencies
npm install

# serve with hot reload at localhost:8080
npm run dev

# build for production with minification
npm run build

# build for production and view the bundle analyzer report
npm run build --report
```

For detailed explanation on how things work, checkout the [guide](http://vuejs-templates.github.io/webpack/) and [docs for vue-loader](http://vuejs.github.io/vue-loader).

# Note!!

`config/index.js` has been changed in three important ways to build for 
Github pages instead of a standard static host:

* `assetsPublicPath: '/'` -> `assetsPublicPath: './'`
* `index: path.resolve(__dirname, '../dist/index.html'),` -> `    index: path.resolve(__dirname, '../docs/index.html')`
* `    assetsRoot: path.resolve(__dirname, '../dist'),` -> `    assetsRoot: path.resolve(__dirname, '../docs'),`

Also note that font loader has been increased to bundle FontAwesome as Github Pages
was having trouble referencing additional resources in built CSS files
(due to the above change).