(function() {

    'use strict';

    describe('ui.bootstrap.locale-dialog', function() {
        
        beforeEach(module('ui.bootstrap.locale-dialog'));

        describe('$localeSelectorDialog service', function() {

            var $localeSelectorDialog;

            beforeEach(inject(function(_$localeSelectorDialog_){
                $localeSelectorDialog = _$localeSelectorDialog_;
            }));

            describe('service.open method', function () {

                it('should call $uibModal.open method', inject(function ($uibModal) {

                    spyOn($uibModal, 'open');

                    $localeSelectorDialog.open();

                    expect($uibModal.open).toHaveBeenCalled();
                }));
            });
        });

        describe('$localeSelectorDialogController controller', function() {

            var $controller;

            beforeEach(inject(function(_$controller_){
                $controller = _$controller_;
            }));

            describe('vm.options', function () {

                it('should know my options', function() {
                    var options = { someOption: 'option value' };

                    var vm = $controller('$localeSelectorDialogController', { options: options, $uibModalInstance: {} });

                    expect(vm.options.someOption).toEqual('option value');
                });
            });

            describe('vm.dismiss', function () {

                it('should call $uibModalInstance.dismiss method after dismissing', function() {

                    var fakedModal = { dismiss: function () {} };

                    spyOn(fakedModal, 'dismiss');

                    var vm = $controller('$localeSelectorDialogController', { options: { }, $uibModalInstance: fakedModal });

                    vm.dismiss();

                    expect(fakedModal.dismiss).toHaveBeenCalled();
                });
            });

            describe('vm.selectLocale', function () {

                it('should call $uibModalInstance.close method with the selected locale', function() {

                    var fakedModal = { close: function (locale) {} };

                    spyOn(fakedModal, 'close');

                    var vm = $controller('$localeSelectorDialogController', { options: { }, $uibModalInstance: fakedModal });

                    vm.selectLocale('my selected locale');

                    expect(fakedModal.close).toHaveBeenCalledWith('my selected locale');
                });
            });
        });

        describe('filterLocales filter', function() {

            var $filter;
            var localesTestData = {
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
                "fr-FR": {
                    "name": "Fran\u00e7ais (FR)",
                    "language": "fr",
                    "country": "fr"
                }
            };

            beforeEach(inject(function(_$filter_){
                $filter = _$filter_;
            }));

            it('should filter all items while search is empty', function() {

                var filterLocales = $filter('filterLocales');
                expect(
                    Object.keys(filterLocales(localesTestData, '')).length
                ).toEqual(3);
            });

            it('should filter items by key', function() {

                var filterLocales = $filter('filterLocales');
                expect(
                    Object.keys(filterLocales(localesTestData, 'e')).length
                ).toEqual(2);
            });

            it('should filter items by item.name', function() {

                var filterLocales = $filter('filterLocales');
                expect(
                    Object.keys(filterLocales(localesTestData, 'glis')).length
                ).toEqual(2);
            });

            it('should filter items by item.country', function() {

                var filterLocales = $filter('filterLocales');
                expect(
                    Object.keys(filterLocales(localesTestData, 'fr')).length
                ).toEqual(1);
            });
        });
    });
})();