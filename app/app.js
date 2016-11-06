'use strict';

// Declare app level module which depends on views, and components
angular.module('myApp', ['ngMaterial','lfNgMdFileInput',
    'ngRoute',
    'myApp.view1',
    'myApp.view2',
    'myApp.version'
]).config(['$locationProvider', '$routeProvider', '$mdThemingProvider',
    function ($locationProvider, $routeProvider, $mdThemingProvider) {
        $locationProvider.hashPrefix('!');

        $routeProvider.otherwise({redirectTo: '/view1'});

        $mdThemingProvider.theme('default')
          .dark()
            .accentPalette('yellow').primaryPalette("teal");

    }]);
