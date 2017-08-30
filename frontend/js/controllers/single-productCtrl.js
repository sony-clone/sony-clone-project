angular.module("sonyApp")
.controller('single-productsCtrl', function($scope, $stateParams, singleService) {

console.log("testing");
    $scope.checkParams = function() {
        console.log('log');
        singleService.getProducts($stateParams.id)
            .then( function(response){
                $scope.products = response;
            })
    }
    
    $scope.checkParams();
    
    
    switch($stateParams.id){
        case "television":
        console.log("ANYTING")
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
            $scope.title = 'Camcorders'
            $scope.bannerImg = './images/camcorder-banner.jpg';
            $scope.top = 'VIDEO CAMERAS';
            $scope.bottom = '';
            break;    

    }
})