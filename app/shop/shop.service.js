'use strict';


  const shopService = function ($http)  {

    const vm = this;
    console.log('hello from the shop service')
      vm.getInventory = function()  {
      return $http.get('http://localhost:3500/inventory')
      }

      vm.shoppingCart = {
        cart: [],
        subtotal: 0.00,
        total: 0.00
      }

      vm.addItemToCart = function(amount, inventory) {
        vm.item = inventory;
        vm.item.amount = amount;
        vm.shoppingCart.cart.push(vm.item);
        localStorage.setItem('cart', vm.shoppingCart)
        vm.shoppingCart.subtotal += vm.item.price * vm.item.amount
        console.log(vm.shoppingCart.subtotal)
        vm.shoppingCart.total =+ (vm.shoppingCart.subtotal * .08) +  vm.shoppingCart.subtotal;
        console.log(vm.shoppingCart.total)
      }

      vm.confirmOrder = function()  {
        console.log(vm.shoppingCart)
      }

  }

export default shopService
