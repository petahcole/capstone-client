'use strict';


  import template from 'html-loader!./order.template.html'

  const orderController = function(shopService)  {
    const vm = this;

    vm.$onInit = function() {
      console.log('hello from the order controller');
      shopService.getOrder()
    }

  }

  const OrderComponent = {
    template: template,
    controller: orderController
  }

  export default OrderComponent
