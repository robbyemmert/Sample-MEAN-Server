angular.module('directiveLib', [])
.directive('navbar', function(){
    return{
        templateUrl: '/components/navbar/navbar.html',
        scope: {
            title: '@title'
        },
        link: function(scope, element){
            scope.login = function(){
                alert("Logging in");
            }
            console.log(scope.title);
        }
    }
})
