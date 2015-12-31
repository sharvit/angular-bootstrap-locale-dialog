/**
 * angular-bootstrap-locale-dialog - Locale selector dialog for angular-bootstrap
 * @version v1.0.3
 * @link https://github.com/sharvit/angular-bootstrap-locale-dialog#readme
 * @license MIT
 */
(function() {
    'use strict';

    $localeSelectorDialogController.$inject = ['options', '$uibModalInstance'];
    $localeSelectorDialog.$inject = ['$uibModal'];
    angular
        .module('ui.bootstrap.locale-dialog', [
            'ui.bootstrap'
        ])

        .filter('filterLocales', filterLocales)

        .controller('$localeSelectorDialogController', $localeSelectorDialogController)

        .factory('$localeSelectorDialog', $localeSelectorDialog)
    ;

    /* @ngInject */
    function filterLocales () {
        return function (items, search) {

            // do not filter nothing
            if ((!angular.isString(search)) || (search.length < 1)) {
                return items;
            }

            // filtered result
            var filtered = {};

            // try match each item
            angular.forEach(items, function(value, key) {

                // create a regex from the search value
                var searchRegex = new RegExp(search, 'i');

                // try to match the regex on one of each [key, value.country, value.name]
                if ((key.match(searchRegex)) || (value.name.match(searchRegex)) || (value.country.match(searchRegex))) {
                    // add the item to the filtered result
                    filtered[key] = value;
                }
            });

            // return the filtered data
            return filtered;
        };
    }

    /* @ngInject */
    function $localeSelectorDialogController (options, $uibModalInstance) {
        var vm = this;

        vm.options          =   options || { };

        vm.dismiss          =   $uibModalInstance.dismiss;
        vm.selectLocale     =   selectLocale;

        activate();

        //////////////

        function activate () {
            if (!angular.isObject(vm.options.locales)) {
                vm.options.locales = {};
            }
            
            vm.count = Object.keys(vm.options.locales).length;
        }

        function selectLocale (locale) {
            return $uibModalInstance.close(locale);
        }
    }

    /* @ngInject */
    function $localeSelectorDialog ($uibModal) {
        var service = {
            open: openDialog
        };
        return service;

        ////////////////

        function openDialog (options) {

            // default options
            var defaultOptions = {
                templateUrl: 'angular-bootstrap-locale-dialog/angular-bootstrap-locale-dialog.html',
                showFlags: false,
                showSearch: false,
                contributeUrl: null,
                locales: []
            };

            // we can object or nothing
            if (!angular.isObject(options)) {
                options = {};
            }

            // apply the default options
            options = angular.extend(defaultOptions, options);

            // open the dialog and return this $uibModal.open promise
            return $uibModal.open({
                templateUrl: options.templateUrl,
                bindToController: true,
                controllerAs: 'vm',
                controller: '$localeSelectorDialogController',
                resolve: {
                    options: options
                }
            });
        }
    }
})();
/**
 * angular-bootstrap-locale-dialog - Locale selector dialog for angular-bootstrap
 * @version v1.0.3
 * @link https://github.com/sharvit/angular-bootstrap-locale-dialog#readme
 * @license MIT
 */
angular.module("ui.bootstrap.locale-dialog").run(["$templateCache", function($templateCache) {$templateCache.put("angular-bootstrap-locale-dialog/angular-bootstrap-locale-dialog.html","<div class=\"modal-content\" dir=\"ltr\">\n\n    <!-- dialog header -->\n    <div class=\"modal-header\">\n        <button ng-click=\"vm.dismiss()\" class=\"close\" style=\"float: right;\">\n            <i class=\"fa fa-times\"></i>\n        </button>\n        <h3 class=\"modal-title\">\n            <i class=\"fa fa-globe\"></i> \n            We are available in {{vm.count}} languages\n        </h3>\n    </div>\n\n    <!-- dialog body -->\n    <div class=\"modal-body\">\n\n        <!-- search for locales -->\n        <div ng-show=\"vm.options.showSearch\" class=\"form-group\">\n            <input type=\"search\" ng-model=\"vm.search\" placeholder=\"Search languages...\" class=\"form-control\">\n        </div>\n\n        <!-- locales list -->\n        <div class=\"row\">\n\n            <div ng-repeat=\"(localeKey, localeData) in vm.options.locales | filterLocales:vm.search\" class=\"col-xs-6 col-sm-4 col-lg-4\">\n                <button ng-click=\"vm.selectLocale(localeKey)\" class=\"btn btn-link\">\n                    <span ng-if=\"vm.options.showFlags\">\n                        <span class=\"flag-icon flag-icon-{{localeData.country}}\"></span>\n                    </span>\n\n                    <span>{{localeData.name}}</span>\n                </button>\n            </div>\n\n        </div>\n\n        <!-- contribute area -->\n        <div ng-if=\"vm.options.contributeUrl\">\n            <br />\n            <div class=\"row\">\n                <div class=\"col-lg-12\">\n                    <div class=\"well text-center text-muted\">\n                        <span>Don\'t you see your language?</span>\n                        <a ng-href=\"{{vm.options.contributeUrl}}\" target=\"_blank\" >Help us translate it!</a>\n                    </div>\n                </div>\n            </div>\n        </div>\n\n    </div>\n\n</div>");}]);