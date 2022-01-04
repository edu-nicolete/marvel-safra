var app = angular.module('marvel');
app.config(['$routeProvider',router]);
function router ($routeProvider) {
    $routeProvider
        .when('/heroisMarvel', {
            templateUrl: 'heroisMarvel/heroisMarvel.html',
            controller: 'heroisMarvel as vm'
        })
        .otherwise('/heroisMarvel');
};

app.run(['$cookies','$rootScope', '$location', function($cookies,$rootScope, $location) {
    $rootScope.$on('$routeChangeStart', function(){
        var tokenValidado = $cookies.get('tokenValidado');
        if (!tokenValidado) {
            $location.path('/heroisMarvel');
        }
    });
}]);