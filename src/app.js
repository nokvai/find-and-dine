import angular from 'angular';
import ngTouch from 'angular-touch';
import ngSanitize from 'angular-sanitize';
import uiRouter from 'angular-ui-router';

import animations from './animations/animations';
import directives from './directives';
import services from './services';
import controllers from './controllers';
import components from './components';

import appView from './views/app.html';
import homeView from './views/home.html';

/**
 * Register main angular app
 */
export default angular
  .module('app', [
    ngTouch,
    ngSanitize,
    uiRouter,
    animations,
    directives,
    services,
    controllers,
    components,
  ])
  .config(function($stateProvider, $locationProvider, $urlRouterProvider) {
    'ngInject';

    $stateProvider
      .state('app', {
        abstract: true,
        controller: 'AppCtrl',
        controllerAs: 'vm',
        template: appView,
      })
      .state('app.home', {
        url: '/',
        controller: 'HomeCtrl',
        controllerAs: 'vm',
        template: homeView,
      });

    $urlRouterProvider.otherwise('/');

    $locationProvider.html5Mode(true);
  }).name;
