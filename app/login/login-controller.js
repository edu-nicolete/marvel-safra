var app = angular.module('marvel');
app.controller('loginController', ['$cookies', 'loginService', '$location', loginController]);

function loginController($cookies, loginService, $location) {
    var vm = this;

    vm.login = login;
    vm.limpar = limpar;

    vm.user = '';
    vm.senha = '';

    iniciar();

    function iniciar() {
      console.log('entrou');
        vm.handleLogin = false;
        vm.token = $cookies.get('tokenValidado');
        if (vm.token) {
            $location.path('/heroisMarvel');
        }
        else{
            vm.handleLogin = true;
        };

    };

    function login(user, senha) {
        loginService.login(user, senha).then(function (response) {
            $cookies.put('tokenValidado', response.data.token);
            vm.token = response.data.token;
            if (vm.token){
                $location.path('/heroisMarvel');
            }
        });
    }

    function limpar() {
        vm.user = '';
        vm.senha = '';
    }
};
