import ng from 'angular';
import app from './app';
import LayoutController from './layout/layout.controller';

app
  .inject('$stateProvider', '$urlRouterProvider', '$locationProvider')
  .config((
    $stateProvider: ng.ui.IStateProvider,
    $urlRouterProvider: ng.ui.IUrlRouterProvider,
    $locationProvider: ng.ILocationProvider
  ) => {
    $urlRouterProvider.otherwise('/');
    $locationProvider.html5Mode(true);

    $stateProvider
      .state('layout', {
        abstract: true,
        templateUrl: 'demo/layout/layout.html',
        controller: LayoutController,
        controllerAs: '$ctrl'
      })
      .state('layout.home', {
        url: '/',
        templateUrl: 'demo/home/home.html',
        data: {
          label: 'Home'
        }
      });
  });
