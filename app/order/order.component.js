'use strict';


  import template from 'html-loader!./order.template.html'
  // import template from 'html-loader!./personal-export.template.html'

  const orderController = function(shopService)  {
    const vm = this;

    vm.$onInit = function() {
      console.log('hello from the order controller');
      vm.currentOrder = shopService.shoppingCart
      console.log(vm.currentOrder.cart)
      vm.wholesaleOrder = []
      vm.currentOrder.cart.forEach(item =>  {
        vm.wholesaleOrder.push({
          name: item.name,
          color: item.color,
          soldAs: item.soldAs,
          price: item.price,
          amount: item.amount
        })


      })
      console.log(vm.wholesaleOrder)
    }

    vm.exportWholesaler = function()  {
      console.log('exported to wholesaler')
    }

    vm.exportPersonal = function()  {
      console.log('exported to personal')
    }

    vm.getHeaders = function()  {
      return ['Item', 'Color', 'Sold As', 'Price', 'Amount']
    }


  }

  const OrderComponent = {
    template: template,
    controller: orderController
  }

  export default OrderComponent
