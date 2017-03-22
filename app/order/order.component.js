'use strict';


  import template from 'html-loader!./order.template.html'

  const orderController = function(shopService)  {
    const vm = this;

    vm.$onInit = function() {
      console.log('hello from the order controller');
      vm.currentOrder = shopService.shoppingCart
    }

    vm.exportWholesaler = function()  {
      console.log('exported to wholesaler')
    }

    vm.exportPersonal = function()  {
      console.log('exported to personal')
    }

    vm.prepWholesale = function() {
      vm.wholeSaleOrder = vm.currentOrder
    }

    vm.prepPersonal = function()  {
      vm.personalOrder = vm.currentOrder;
      vm.personalOrder.markup = vm.markup
      vm.personalOrder.labor = vm.labor
      vm.personalOrder.price = (vm.personalOrder.price * vm.markup) + vm.personalOrder.price;
      vm.personalOrder.subtotal = vm.personalOrder.subtotal + vm.labor

    }
  }

  const OrderComponent = {
    template: template,
    controller: orderController
  }

  export default OrderComponent
