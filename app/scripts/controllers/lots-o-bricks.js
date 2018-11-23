'use strict';

/**
 * @ngdoc function
 * @name serviceQuizApp.controller:LotsOBricksCtrl
 * @description
 * # LotsOBricksCtrl
 * Controller of the serviceQuizApp
 */
angular.module('serviceQuizApp')
  .controller('LotsOBricksCtrl',['brickWarehouse', function(warehouse) {
    this.name = 'Lots O Bricks';
    this.redBrick = warehouse.bricks.red;
    this.blueBrick = warehouse.bricks.blue;
    this.greenBrick = warehouse.bricks.green;

     this.addToCart = function(price){
      warehouse.decreaseQuantity('red',price);
    };

     this.addToCart = function(price){
      warehouse.decreaseQuantity('blue',price);
    };

     this.addToCart = function(price){
      warehouse.decreaseQuantity('green',price);
    };
  }]);
