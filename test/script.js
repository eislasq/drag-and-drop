// declare a module
var myAppModule = angular.module('myApp', ['drag-and-drop']);

myAppModule.controller('testCtrl', function ($scope) {
    $scope.log = '---';

    [].forEach.call(
            'dragstart drag dragenter dragleave dragover drop dragend'.split(' '),
            function (eventName) {
                $scope[eventName] = function ($event) {
//                    console.log($event.type, $event.target);
                    console.log($event);
                    $event.target.innerHTML = $event.type + ' '
                            + $event.timeStamp + ' '
                            + $event.offsetX + ',' + $event.offsetY;
                };
            });

});