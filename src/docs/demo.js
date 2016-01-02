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
    "fr-SW": {
        "name": "Fran\u00e7ais (SW)",
        "language": "fr",
        "country": "sw"
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
    }
})
.controller('DemoController', function ($localeSelectorDialog, avilableLocales) {
    var vm = this;

    vm.changeLocale = function () {
        $localeSelectorDialog.open({
            locales: avilableLocales,
            showFlags: true,
            showSearch: true
        });
    };
});