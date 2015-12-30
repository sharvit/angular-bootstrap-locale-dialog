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
                template: '',
                templateUrl: '',
                limitMin: 4,
                limitMax: 24,
                flags: '',
                icon: '',
                help: '',
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
                template: options.templateUrl,
                templateUrl: options.templateUrl,
                bindToController: true,
                controllerAs: 'vm',
                controller: $localeSelectorDialogDialogController,
                resolve: {
                    options: function () {
                        return {
                            limitMin: limitMin,
                            limitMax: limitMax,
                            flags: flags,
                            icon: icon,
                            help: help,
                            locales: locales
                        };
                    }
                }
            });
        }
    }

    /* @ngInject */
    function $localeSelectorDialogDialogController (options, $uibModalInstance) {
        var vm = this;

        vm.close        =   $uibModalInstance.close;
        vm.setLocale    =   setLocale;

        activate();

        //////////////

        function activate () {
            vm.limitMin     =   options.limitMin;
            vm.limitMax     =   options.limitMax;
            vm.flags        =   options.flags;
            vm.icon         =   options.icon;
            vm.help         =   options.help;
            vm.locales      =   options.locales;
        }

        function setLocale (locale) {
            return $uibModalInstance.close(locale);
        }
    }
})();