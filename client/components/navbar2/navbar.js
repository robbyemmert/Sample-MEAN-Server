angular.module('demoApp')

.directive('daNavbar', function(){
    return {
        templateUrl: '/components/navbar2/navbar.html',
        scope: {
            name: "=name"
        },
        link: function(scope, element){
            
        }
    }
})
