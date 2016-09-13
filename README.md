# Drag And Drop

## Drag and drop directives for angularJS
- ng-dragstart
- ng-drag
- ng-dragenter
- ng-dragleave
- ng-dragover
- ng-drop
- ng-dragend

## Instalación con bower
```
bower install drag-and-drop --save
```


## Ejemplo de uso
<a href="http://plnkr.co/edit/d4OgfpeyI8dYE0mty5lP?p=preview" target="_blank">Demo</a>

## Otro ejemplo
```html
<!--index.html-->
<html>
    <head>
        <title>TODO supply a title</title>
        <meta charset="UTF-8">
        <meta name="viewport" content="width=device-width, initial-scale=1.0">

        <link rel="stylesheet" href="./style.css"/>

        <script src="../bower_components/angular/angular.min.js"></script>
        <script src="../bower_components/drag-and-drop/drag-and-drop.js"></script>
        <script src="./script.js"></script>
    </head>
    <body ng-app="myApp" >
        <div ng-controller="testCtrl">
            <div class="drag" draggable="true" 
                 ng-dragstart="dragstart($event)" 
                 ng-drag="drag($event)"
                 ng-dragenter="dragenter($event)"
                 ng-dragleave="dragleave($event)"
                 ng-dragover="dragover($event)"
                 ng-drop="drop($event)"
                 ng-dragend="dragend($event)"
                 >
                Drag
            </div>
            <div class="dropp" dropzone="true"
                 ng-dragstart="dragstart($event)" 
                 ng-drag="drag($event)"
                 ng-dragenter="dragenter($event)"
                 ng-dragleave="dragleave($event)"
                 ng-dragover="dragover($event)"
                 ng-drop="drop($event)"
                 ng-dragend="dragend($event)"
                 >
                Dropp
            </div>
            <div>{{log}}</div>
        </div>
    </body>
</html>

```

```js
//script.js
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
```

