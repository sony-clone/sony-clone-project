angular.module("sonyApp", ['ui.router'])
    .config(function($stateProvider, $urlRouterProvider) {

console.log('lugia left')
        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('home', {
                templateUrl: './views/home.html',
                url: '/home'
            })
            .state('electronics', {
                templateUrl: './views/single-product.html',
                controller: 'single-productsCtrl',
                url: '/electronics/:id'
            })

    });