'use strict';
var app = angular.module('marvel');
app.controller('heroisMarvel', ['heroisMarvelService', '$routeParams', '$location', '$scope', heroisMarvel]);

function heroisMarvel(heroisMarvelService, $routeParams, $location, $scope) {
  var vm = this;

  vm.filtraHeroi = filtraHeroi;
  vm.fechaModal = fechaModal;
  vm.pesquisa = '';

  vm.listaFiltrada;
  vm.listaPersonagens = [];
  vm.personagemFiltrado = [];

  vm.myModal = new bootstrap.Modal(document.getElementById('myModal'));

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

  function fechaModal() {
    vm.myModal.hide();
  }
}