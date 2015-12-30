(function() {
    'use strict';

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
                showFlags: true,
                showSearch: true,
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