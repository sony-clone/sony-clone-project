angular.module('sonyApp').controller('homeCtrl', fucntion($scope, homeService){


    $scope.showPopover = function(){
        $scope.hidePopover = function(){ $scope.popoverIsVisable = !$scope.popoverIsVisible;
    };
        $scope.popoverIsVisable = false;
        };

})