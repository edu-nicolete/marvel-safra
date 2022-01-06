'use strict';
var app = angular.module('marvel');
app.controller('heroisMarvel', ['heroisMarvelService', '$routeParams', '$location', '$scope', '$cookies', heroisMarvel]);

function heroisMarvel(heroisMarvelService, $routeParams, $location, $scope, $cookies) {
  var vm = this;

  vm.filtraHeroi = filtraHeroi;
  vm.fechaModal = fechaModal;
  vm.deslogar = deslogar;
  vm.modal2 = modal2;
  vm.fechaModal2 = fechaModal2;
  vm.filtra = filtra;
  vm.vazio = vazio;
  vm.pesquisa = '';

  vm.listaFiltrada;
  vm.serieDetalhada;
  vm.listaPersonagens = [];
  vm.personagemFiltrado = [];

  vm.myModal = new bootstrap.Modal(document.getElementById('myModal'));
  vm.myModal2 = new bootstrap.Modal(document.getElementById('myModal2'));

  iniciar();

  function iniciar() {
    getPersonagens();
  }

  function getPersonagens() {
    heroisMarvelService.buscaTudo().then(function (response) {
      vm.listaPersonagens = response.data.data.results;
      vm.personagemFiltrado = response.data.data.results;
    });
  }

  function filtraHeroi(id){
    if (id != null) {
      heroisMarvelService.buscarPersonagemEspecifico(id).then(function (response) {
        if (response != null) {
          vm.myModal.show();
          vm.listaFiltrada = response.data.data.results[0];
        } else {
          console.log('erro', response);
        }
      });
    };
  }

  function modal2(url) {
    if (url != null) {
      heroisMarvelService.buscarSerie(url).then(function (response) {
        if (response != null) {
          vm.myModal2.show();
          vm.serieDetalhada = response.data.data.results[0];
        }
      });
    }
  }

  function fechaModal2() {
    vm.myModal2.hide();
  }

  function fechaModal() {
    vm.myModal.hide();
  }

  function deslogar() {
      $cookies.remove('tokenValidado');
      $location.path('login');
  }

  function filtra(pesquisa) {
    if (pesquisa !== undefined && pesquisa.length > 0) {
      heroisMarvelService.filtraPersonagem(pesquisa).then(function (response) {
        if (response != null) {
          vm.personagemFiltrado = response.data.data.results;
        }
      });
    }
    else {
      vm.personagemFiltrado = vm.listaPersonagens;
    };
  };

  function vazio(e) {
    if (e.target.value === '') {
      getPersonagens();
    };
  };
}
