

## Angular Bootstrap Locale Dialog - [AngularJS] service to open locale (language) selector dialog using [AngularUI Bootstrap]

[![Build Status](https://travis-ci.org/sharvit/angular-bootstrap-locale-dialog.svg?branch=master)](https://travis-ci.org/sharvit/angular-bootstrap-locale-dialog)
[![devDependency Status](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog/dev-status.svg?branch=master)](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog#info=devDependencies)

### Quick links
- [Demo](#demo)
- [Installation](#installation)
    - [Download the build](#download-the-build)
        - [NPM](#install-with-npm)
        - [Bower](#install-with-bower)
        - [Manual](#manual-download)
    - [Adding dependency to your project](#adding-dependency-to-your-project)


## Demo

Do you want to see dialog in action?
Visit http://sharvit.github.io/angular-bootstrap-locale-dialog/!


## Installation

Installation is easy as [angular-bootstrap-locale-dialog] has minimal dependencies - only the [AngularJS] and [AngularUI Bootstrap] are required.

Additionally, it is recommended to use some other dependencies:
- [font-awesome] - use to render extra icons for the dialog
- [flag-icon-css] - use to render flag icons for each locale

### Download the build

#### Install with NPM

```sh
$ npm install angular-bootstrap-locale-dialog
```

This will install [AngularJS] and [AngularUI Bootstrap] NPM packages.

#### Install with Bower
```sh
$ bower install angular-bootstrap-locale-dialog
```

This will install [AngularJS] and [AngularUI Bootstrap] bower packages.

#### Manual download

All the build files for all version can manually downloaded (or better yet, referencing them from the CDN):
https://github.com/sharvit/angular-bootstrap-locale-dialog/tree/gh-pages

### Adding dependency to your project

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `angular-bootstrap-locale-dialog` [AngularJS] module:

```js
angular.module('myModule', [
    'ui.bootstrap',
    'angular-bootstrap-locale-dialog'
]);
```


[angular-bootstrap-locale-dialog]: http://sharvit.github.io/angular-bootstrap-locale-dialog/
[AngularJS]: https://angularjs.org/
[AngularUI Bootstrap]: https://angular-ui.github.io/bootstrap/
[font-awesome]: https://fortawesome.github.io/Font-Awesome/
[flag-icon-css]: https://lipis.github.io/flag-icon-css/