var app = angular.module('marvel');
app.service('loginService', ['$http', loginService]);

function loginService($http) {

  var loginServiceAPI = {
    login: login
  };

  var url = 'https://herois-marvel-safra.herokuapp.com/login';
  // var url = 'http://localhost:8000/login'


  function login(user, senha) {
    return $http.post(url, { user: user, password: senha });
  };

  return loginServiceAPI;
};
