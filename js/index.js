var ngApp = angular.module('testMod',[]);
ngApp.controller("simpleCtrl", function($scope) {
    $scope.firstName = "John";
    $scope.lastName = "Doe";
    $scope.fname = "Test";
    $scope.names = ['abc', 'def', 'ghi', 'jkl'];
    $scope.addTodo = function(){
        if($scope.fname!=='')
            $scope.names.push($scope.fname);
        $scope.fname = '';
    };
    $scope.removeTodo = function(){
        if($scope.fname!=='')
            $scope.names.push($scope.fname);
        $scope.fname = '';
    };
});

