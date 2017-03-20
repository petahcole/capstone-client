'use strict';


  const shopService = function ($http)  {

    const vm = this;
    console.log('hello from the shop service')
      vm.getInventory = function()  {
      return $http.get('http://localhost:3500/inventory')
      }

      vm.shoppingCart = []

      vm.addItemToCart = function(amount, inventory) {
        vm.item = inventory;
        vm.item.amount = amount;
        vm.shoppingCart.push(vm.item);
        localStorage.setItem('cart', vm.shoppingCart)        
      }

  }

export default shopService
