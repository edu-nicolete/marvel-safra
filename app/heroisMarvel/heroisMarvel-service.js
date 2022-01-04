var app = angular.module('marvel');
app.service('heroisMarvelService',['$http', heroisMarvelService]);

function heroisMarvelService($http) {

    var ergastAPI = {
        buscaTudo: buscaTudo,
        buscarPersonagemEspecifico: buscarPersonagemEspecifico,
        buscaHistoriaEspecifica: buscaHistoriaEspecifica
    };
    const config = {
        params:{
            apikey:'83e1b1a78fecd78414a4485ff472c148',
            hash:'269cad143b5fd112a76794c4c593f592',
            ts: 1
        },
        headers:{Accept: '*/*'}
    };

    function buscaTudo() {
        return $http.get('https://gateway.marvel.com/v1/public/characters', config);
    };

    function buscarPersonagemEspecifico(id) {
        return $http.get('https://gateway.marvel.com/v1/public/characters/'+id, config);
    };

    function buscaHistoriaEspecifica(id) {
        return $http.get(`https://gateway.marvel.com/v1/public/stories/${id}?ts=${config.params.ts}&apikey=${config.params.apikey}&hash=${config.params.hash}`);
    };
    return ergastAPI;
};