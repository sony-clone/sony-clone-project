angular.module("sonyApp", ['ui.router'])
  .config(function($stateProvider, $urlRouterProvider) {


    $urlRouterProvider.otherwise('/');

    $stateProvider
      .state('home', {
        templateUrl: '',
        controller: 'homeCtrl',
        url: '/'
      })
      .state('electronics', {
        templateUrl: '',
        controller: 'audio-systemsCtrl',
        url: '/electronics/:id'
      })

  });
