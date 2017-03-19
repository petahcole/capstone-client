'use strict';


  const shopService = function ($http)  {

    const vm = this;
    console.log('hello from the shop service')
      vm.getInventory = function()  {
      return $http.get('http://localhost:3500/inventory')
      }

      vm.addItemToCart = function() {
        vm.shoppingCart = []
        console.log('added to cart')
        // vm.shoppingCart.push(item)
      }

  }

export default shopService
