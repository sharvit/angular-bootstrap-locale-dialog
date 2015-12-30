(function() {
    'use strict';

    angular
        .module('ui.bootstrap.locale-dialog', [
            'ui.bootstrap'
        ])

        .factory('$localeSelectorDialogDialog', $localeSelectorDialogDialog)
    ;

    /* @ngInject */
    function $localeSelectorDialogDialog ($uibModal) {
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
                controller: $localeSelectorDialogDialogController,
                resolve: {
                    options: options
                }
            });
        }
    }

    /* @ngInject */
    function $localeSelectorDialogDialogController (options, $uibModalInstance) {
        var vm = this;

        vm.options      =   options;

        vm.dismiss      =   $uibModalInstance.dismiss;
        vm.setLocale    =   setLocale;

        activate();

        //////////////

        function activate () {
            vm.localesKeys  = Object.keys(vm.options.locales);
            vm.localesCount = Object.keys(vm.options.locales).length;
        }

        function setLocale (locale) {
            return $uibModalInstance.close(locale);
        }
    }
})();