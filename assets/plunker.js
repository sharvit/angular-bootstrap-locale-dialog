angular.module('plunker', [])

  .factory('plunkGenerator', function ($document) {

    return function (nguiVersion, bsuiVersion, uiVersion, faVersion, fiVersion, version, content) {

      var form = angular.element('<form style="display: none;" method="post" action="http://plnkr.co/edit/?p=preview" target="_blank"></form>');
      var addField = function (name, value) {
        var input = angular.element('<input type="hidden" name="' + name + '">');
        input.attr('value', value);
        form.append(input);
      };

      var indexContent = function (content) {
        return '<!doctype html>\n' +
          '<html ng-app="demo">\n' +
          '  <head>\n' +
          '    <script src="//ajax.googleapis.com/ajax/libs/angularjs/'+nguiVersion+'/angular.js"></script>\n' +
          '    <script src="//ajax.googleapis.com/ajax/libs/angularjs/'+nguiVersion+'/angular-animate.js"></script>\n' +
          '    <script src="//angular-ui.github.io/bootstrap/ui-bootstrap-tpls-'+uiVersion+'.js"></script>\n' +
          '    <script src="//sharvit.github.io/angular-bootstrap-locale-dialog/angular-bootstrap-locale-dialog-v' + version + '.js"></script>\n' +
          '    <script src="example.js"></script>\n' +
          '    <link href="//netdna.bootstrapcdn.com/bootstrap/'+bsuiVersion+'/css/bootstrap.min.css" rel="stylesheet">\n' +
          '    <link href="//maxcdn.bootstrapcdn.com/font-awesome/'+faVersion+'/css/font-awesome.min.css" rel="stylesheet">\n' +
          '    <link href="//cdnjs.cloudflare.com/ajax/libs/flag-icon-css/'+fiVersion+'/css/flag-icon.css" rel="stylesheet">\n' +
          '  </head>\n' +
          '  <body>\n\n' +
          content + '\n' +
          '  </body>\n' +
          '</html>\n';
      };

      var scriptContent = function(content) {
        return "angular.module('demo', ['ngAnimate', 'ui.bootstrap', 'ui.bootstrap.locale-dialog']);" + "\n" + content;
      };

      addField('description', 'https://sharvit.github.io/angular-bootstrap-locale-dialog/');
      addField('files[index.html]', indexContent(content.markup));
      addField('files[example.js]', scriptContent(content.javascript));

      $document.find('body').append(form);
      form[0].submit();
      form.remove();
    };
  })

  .controller('PlunkerCtrl', function ($scope, plunkGenerator) {

    $scope.content = {};

    $scope.edit = function (nguiVersion, bsuiVersion, uiVersion, faVersion, fiVersion, version) {
      plunkGenerator(nguiVersion, bsuiVersion, uiVersion, faVersion, fiVersion, version, $scope.content);
    };
  })

  .directive('plunkerContent', function ($timeout) {
    return {
      link:function (scope, element, attrs) {
        $timeout(function () {
          scope.content[attrs.plunkerContent] = element.text().trim();
        }, 1000);
      }
    };
  });