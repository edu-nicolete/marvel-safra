'use strict';

describe('marvel module', function() {

  beforeEach(function(){
    angular.module('marvel',[]);
  });

  describe('heroisMarvel controller', function(){

    it('should ....', inject(function($controller) {
      //spec body
      var heroisMarvelCtrl = $controller('heroisMarvel');
      expect(heroisMarvelCtrl).toBeDefined();
    }));

  });
});