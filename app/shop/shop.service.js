'use strict';


  const shopService = function ($http)  {

    const vm = this;
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
        if(amount > 0) {
        vm.shoppingCart.cart.push(vm.item);
        localStorage.setItem('cart', vm.shoppingCart)
        vm.shoppingCart.subtotal += vm.item.price * vm.item.amount
        vm.shoppingCart.total =+ (vm.shoppingCart.subtotal * .08) +  vm.shoppingCart.subtotal;
        } else {
        throw new Error({
          err: 'amount cant be zero'
        })
      }
      }

      vm.confirmOrder = function()  {

      }

      vm.getOrder = function()  {
        vm.currentOrder = vm.shoppingCart
      }

  }

export default shopService
