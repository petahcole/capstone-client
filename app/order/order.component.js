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
  }

  const OrderComponent = {
    template: template,
    controller: orderController
  }

  export default OrderComponent
