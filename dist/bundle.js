'use strict';

angular.module("sonyApp", ['ui.router']).config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

    console.log(' Didnt catch TTar');
    $urlRouterProvider.otherwise('home');

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

angular.module('sonyApp').controller('homeCtrl', ["$scope", "homeService", function ($scope, homeService) {

    $scope.showPopover = function () {
        $scope.hidePopover = function () {
            $scope.popoverIsVisable = !$scope.popoverIsVisible;
        };
        $scope.popoverIsVisable = false;
    };
}]);
"use strict";

angular.module("sonyApp").controller('single-productsCtrl', ["$scope", "$stateParams", "singleService", function ($scope, $stateParams, singleService) {

    console.log("testing");
    $scope.checkParams = function () {
        console.log('log');
        singleService.getProducts($stateParams.id).then(function (response) {
            $scope.products = response;
        });
    };

    $scope.checkParams();

    switch ($stateParams.id) {
        case "television":
            console.log("ANYTING");
            $scope.title = 'Televisions';
            $scope.bannerImg = './images/tv-banner.png';
            $scope.top = 'TELEVISIONS & HOME THEATER';
            $scope.bottom = 'Our most beautiful picture ever';
            break;
        case "hometheaters":
            $scope.title = 'Home Theaters';
            $scope.bannerImg = './images/home-theater-banner.jpg';
            $scope.top = 'TELEVISIONS & HOME THEATER';
            $scope.bottom = '';
            break;
        case "projectors":
            $scope.title = 'Projectors';
            $scope.bannerImg = './images/projector-banner.jpg';
            $scope.top = 'TELEVISIONS & HOME THEATER';
            $scope.bottom = '';
            break;
        case "bluray":
            $scope.title = 'Bluray';
            $scope.bannerImg = './images/dvd-banner.jpg';
            $scope.top = 'TELEVISIONS & HOME THEATER';
            $scope.bottom = '';
            break;
        case "headphones":
            $scope.title = 'Headphones';
            $scope.bannerImg = './images/headphones-banner.jpg';
            $scope.top = 'AUDIO';
            $scope.bottom = '';
            break;
        case "cameras":
            $scope.title = 'Interchangeable-lens Cameras';
            $scope.bannerImg = './images/cameras-banner.jpg';
            $scope.top = 'CAMERAS';
            $scope.bottom = '';
            break;
        case "cellphones":
            $scope.title = 'Cellphones';
            $scope.bannerImg = './images/cell-phone-banner.jpg';
            $scope.top = '';
            $scope.bottom = 'Xperia™ XZ Premium features the new Motion Eye™—a camera so advanced it captures motion that the human eye can’t see.';
            break;
        case "camcorders":
            $scope.title = 'Camcorders';
            $scope.bannerImg = './images/camcorder-banner.jpg';
            $scope.top = 'VIDEO CAMERAS';
            $scope.bottom = '';
            break;

    }
}]);
"use strict";
'use strict';

angular.module('sonyApp').service('homeService', ["$http", function ($http) {}]);
'use strict';

angular.module('sonyApp').service('singleService', ["$http", function ($http) {

    this.getProducts = function (id) {
        var url = '';
        switch (id) {
            case "television":
                console.log("ANYTING");
                url = '/api/tvs';
                break;
            case "hometheaters":
                url = '/api/hometheaters';
                break;
            case "projectors":
                url = '/api/projectors';
                break;
            case "bluray":
                url = '/api/dvdplayers';
                break;
            case "headphones":
                url = '/api/headphones';
                break;
            case "cameras":
                url = '/api/cameras';
                break;
            case "cellphones":
                url = '/api/cellphones';
                break;
            case "camcorders":
                url = '/api/camcorders';
                break;
            // finish cases here homy


        }
        return $http({
            method: "GET",
            url: url
        }).then(function (response) {
            console.log(response.data);

            var products = [];
            /*
            [
                {
                    
                    description : [
                        "4K HDR Processor X1 Extreme for ultimate realism",
                        "Unprecedented contrast with Backlight Master Drive™",
                        "Amazing contrast with X-tended Dynamic Range PRO",
                        "Wide color gamut with TRILUMINOS Display"
                    ] 
                    id : 1 
                    image : "tv-1.jpg" 
                    led : true 
                    model : "Z9D LED 4k Ultra HD" 
                    price : "4499.99" 
                    product : "Z9D" 
                    productid : 1 
                    rating : "4.5" 
                    series : "XBR Z9D" 
                    smarttv : true                     }
            ]
            */
            for (var i = 0; i < response.data.length; i++) {
                if (products.length === 0) {
                    products.push(response.data[0]);
                    products[0].description = [products[0].description];
                } else if (products[products.length - 1].product === response.data[i].product) {
                    products[products.length - 1].description.push(response.data[i].description);
                } else if (products[products.length - 1].product !== response.data[i].product) {
                    products.push(response.data[i]);
                    products[products.length - 1].description = [products[products.length - 1].description];
                }
            }
            console.log(products);
            return products;
        }).catch(function (error) {
            return error;
        });
    };
}]);
//# sourceMappingURL=maps/bundle.js.map
