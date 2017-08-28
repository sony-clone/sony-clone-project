angular.module('sonyApp').controller('homeCtrl', function($scope, homeService){


    $scope.showPopover = function(){
        $scope.hidePopover = function(){ $scope.popoverIsVisable = !$scope.popoverIsVisible;
    };
        $scope.popoverIsVisable = false;
        };

})