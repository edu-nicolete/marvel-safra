var app = angular.module('marvel');
app.config(['$routeProvider',router]);
function router ($routeProvider) {
    $routeProvider
    .when('/login', {
        templateUrl: 'login/login.html',
        controller: 'loginController as vm'
    })
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
            $location.path('/login');
        }
    });
}]);
