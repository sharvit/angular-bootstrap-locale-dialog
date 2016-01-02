`$localeSelectorDialog` is a service to open the locale selector dialog.
It based on [AngularBS] `$uibModal` witch can create modal windows.

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
