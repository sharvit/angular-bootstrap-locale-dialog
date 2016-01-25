## Angular Bootstrap Locale Dialog - Locale selector dialog for angular-bootstrap - https://sharvit.github.io/angular-bootstrap-locale-dialog/

[![Build Status](https://travis-ci.org/sharvit/angular-bootstrap-locale-dialog.svg?branch=master)](https://travis-ci.org/sharvit/angular-bootstrap-locale-dialog)
[![Dependency Status](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog.svg)](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog)
[![devDependency Status](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog/dev-status.svg?branch=master)](https://david-dm.org/sharvit/angular-bootstrap-locale-dialog#info=devDependencies)
[![codecov.io](https://codecov.io/github/sharvit/angular-bootstrap-locale-dialog/coverage.svg?branch=master)](https://codecov.io/github/sharvit/angular-bootstrap-locale-dialog?branch=master)

### Quick links
- [Demo](#demo)
- [Installation](#installation)
    - [Download the build](#download-the-build)
        - [NPM](#install-with-npm)
        - [Bower](#install-with-bower)
        - [Manual](#manual-download)
    - [Adding dependency to your project](#adding-dependency-to-your-project)
- [Usage](#usage)


## Demo

Do you want to see dialog in action?
Visit https://sharvit.github.io/angular-bootstrap-locale-dialog/!


## Installation

Installation is easy as [angular-bootstrap-locale-dialog] has minimal dependencies - only the [AngularJS] and [AngularUI Bootstrap] are required.

Additionally, it is recommended to use some other dependencies:
- [font-awesome] - use to render extra icons for the dialog
- [flag-icon-css] - use to render flag icons for each locale

### Download the build

#### Install with NPM

```sh
$ npm install angular-bootstrap-locale-dialog --save
```

This will install [AngularJS] and [AngularUI Bootstrap] NPM packages.

#### Install with Bower
```sh
$ bower install angular-bootstrap-locale-dialog --save
```

This will install [AngularJS] and [AngularUI Bootstrap] bower packages.

#### Manual download

All the build files for all version can manually downloaded (or better yet, referencing them from the CDN):
https://sharvit.github.io/angular-bootstrap-locale-dialog//angular-bootstrap-locale-dialog-v1.2.1.js

### Adding dependency to your project

When you are done downloading all the dependencies and project files the only remaining part is to add dependencies on the `angular-bootstrap-locale-dialog` [AngularJS] module:

```js
angular.module('myModule', [
    'ui.bootstrap',
    'ui.bootstrap.locale-dialog'
]);
```
[angular-bootstrap-locale-dialog]: http://sharvit.github.io/angular-bootstrap-locale-dialog/
[AngularJS]: https://angularjs.org/
[AngularUI Bootstrap]: https://angular-ui.github.io/bootstrap/
[font-awesome]: https://fortawesome.github.io/Font-Awesome/
[flag-icon-css]: https://lipis.github.io/flag-icon-css/

### Usage

```html
<div ng-controller="DemoController as vm">
    <button ng-click="vm.changeLocale()" type="button" class="btn btn-primary">
        Open a Demo Dialog
    </button>
    <p ng-show="vm.selectedLocale">
        You selected: {{vm.selectedLocale}}
    </p>
</div>
```

```js
angular.module('demo')
.constant("avilableLocales", {
    "en-US": {
        "name": "English (US)",
        "language": "en",
        "country": "us"
    },
    "en-CA": {
        "name": "English (CA)",
        "language": "en",
        "country": "ca"
    },
    "en-GB": {
        "name": "English (GB)",
        "language": "en",
        "country": "gb"
    },
    "en-IN": {
        "name": "English (IN)",
        "language": "en",
        "country": "in"
    },
    "en-IE": {
        "name": "English (IE)",
        "language": "en",
        "country": "ie"
    },
    "fr-FR": {
        "name": "Fran\u00e7ais (FR)",
        "language": "fr",
        "country": "fr"
    },
    "fr-BE": {
        "name": "Fran\u00e7ais (BE)",
        "language": "fr",
        "country": "be"
    },
    "fr-CA": {
        "name": "Fran\u00e7ais (CA)",
        "language": "fr",
        "country": "ca"
    },
    "fr-LB": {
        "name": "Fran\u00e7ais (LB)",
        "language": "fr",
        "country": "lb"
    },
    "he-IL": {
        "name": "\u05e2\u05d1\u05e8\u05d9\u05ea",
        "language": "he",
        "country": "il"
    },
    "pt-BR": {
        "name": "Português (BR)",
        "language": "pt",
        "country": "br"
    },
    "pt-PT": {
        "name": "Português (PT)",
        "language": "pt",
        "country": "pt"
    },
    "ro-RO": {
        "name": "Română",
        "language": "ro",
        "country": "ro"
    },
    "ru-RU": {
        "name": "Русский",
        "language": "ru",
        "country": "ru"
    },
    "sk-SK": {
        "name": "Slovenčina (SK)",
        "language": "sk",
        "country": "sk"
    },
    "tr-TR": {
        "name": "Türkçe",
        "language": "tr",
        "country": "tr"
    },
    "de-DE": {
        "name": "Deutsch (German)",
        "language": "de",
        "country": "de"
    },
    "th-TH": {
        "name": "ภาษาไทย",
        "language": "th",
        "country": "th"
    }
})
.controller('DemoController', function ($localeSelectorDialog, avilableLocales) {
    var vm = this;

    vm.changeLocale = function () {
        $localeSelectorDialog.open({
            locales: avilableLocales,
            showFlags: true,
            showSearch: true,
            contributeUrl: 'https://sharvit.github.io/angular-bootstrap-locale-dialog/'
        }).result.then(function (selectedLocale) {
            vm.selectedLocale = selectedLocale;
        });
    };
});
```

`$localeSelectorDialog` is a service to open the locale selector dialog.
It based on [AngularUI Bootstrap] `$uibModal` witch can create modal windows.

The `$localeSelectorDialog` service has only one method: `open(options)`.

### $localeSelectorDialog's open function

#### options parameter

* `locales`
   _(Type: `object`, Default: `{}`)_ -
   An `object` with all the supported locales of your app.
   The `keys` inside the object should be your locale id, for example: `en-US`
   The `value` for each `key` should fill the following requirements:
   - `name`
      _(Type: `string`)_ -
      The locale readable name, for example `English (US)`
      
   - `language`
      _(Type: `string`)_ -
      The language key, for example `en`
      
   - `country`
      _(Type: `string`)_ -
      The country key, for example `us`

    **Their is an example for the `locale` object at the demo.**
* `templateUrl`
  _(Type: `string`, Default: `angular-bootstrap-locale-dialog/angular-bootstrap-locale-dialog.html`)_ -
  A path to a template representing modal's content.
  Use it if you don't want to use the default template.
  
* `showFlags`
  _(Type: `boolean`, Default: `false`)_ -
  Set to true to show flags next to the locale name.
  Need to install [flag-icon-css] so it will match the css to the flag icon.
  
* `showSearch`
  _(Type: `boolean`, Default: `false`)_ -
  Set to true to show the search field.
  Useful when you have a big list of locales.
  
* `contributeUrl`
  _(Type: `string`, Default: `null`)_ -
  Have a contribute url that your users can help localize your app?
  Set it in order to show contribute box with that url.
  
---
  
#### return

The `open` method returns the `$uibModal` modal instance and use his `promise` to let you know when the dialog is getting closed and what locale did the user choose.
You can get the selected locale from the `result` property of the returned `$uibModal` modal instance.
See the example.
[read more about the $uibModal]

[angular-bootstrap-locale-dialog]: http://sharvit.github.io/angular-bootstrap-locale-dialog/
[AngularJS]: https://angularjs.org/
[AngularUI Bootstrap]: https://angular-ui.github.io/bootstrap/
[font-awesome]: https://fortawesome.github.io/Font-Awesome/
[flag-icon-css]: https://lipis.github.io/flag-icon-css/


## Contributing

* ```npm install && npm install -g  gulp``` to install the environment
* ```gulp build``` build the component, the docs and the demo
* ```gulp serve``` serve the demo
* ```gulp test``` test the component with karama


## License

MIT License (MIT)

Copyright (c) 2015 Avi Sharvit