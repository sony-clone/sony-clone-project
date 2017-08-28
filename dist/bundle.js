'use strict';

angular.module("sonyApp", ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    console.log('lugia left');
    $urlRouterProvider.otherwise('/');

    $stateProvider.state('home', {
        templateUrl: './views/home.html',
        url: '/home'
    }).state('electronics', {
        templateUrl: './views/single-product.html',
        controller: 'single-productsCtrl',
        url: '/electronics/:id'
    });
}]);
"use strict";
'use strict';

angular.module('sonyApp').service('homeService', ["$http", function ($http) {}]);
"use strict";
"use strict";
'use strict';

angular.module('sonyApp').controller('homeCtrl', ["$scope", "homeService", function ($scope, homeService) {

    $scope.showPopover = function () {
        $scope.hidePopover = function () {
            $scope.popoverIsVisable = !$scope.popoverIsVisible;
        };
        $scope.popoverIsVisable = false;
    };
}]);
"use strict";

angular.module("sonyApp").controller('single-productsCtrl', ["$scope", "$stateParams", function ($scope, $stateParams) {

    console.log("testing");
    $scope.checkParams = function () {
        //         if ($stateParams.id === "television") {
        //             //api call
        //             console.log('log');
        //             $scope.products = [{ name: 'tv', description: 'ossfjaoisndffoanf;ondadgons' }, 
        //             { name: '4ktv', description: 'ossfjaoisndffoanfondadgons' }]
        //         } else if ($stateParams.name === 'home-theater') {
        //             $scope.products = [{
        //                 name: 'home-theater',
        //                 description: 'ossfjaois'
        //             }, { name: 'home-theater-surround', description: 'ossfjaoisndffoanf;ondadgons' }]
        //         }
    };
}]);
//# sourceMappingURL=maps/bundle.js.map
