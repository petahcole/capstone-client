'use strict';


  import template from 'html-loader!./personal-export.template.html'

  const personalController = function(shopService)  {
    const vm = this;

    vm.$onInit = function() {
      vm.personalOrder = shopService.shoppingCart
    }

    vm.prepPersonal = function()  {      
      vm.personalOrder.markup = vm.markup
      vm.personalOrder.labor = vm.labor
      vm.personalOrder.cart.forEach(item  =>  {
        item.price = (item.price * vm.markup) + item.price
      })
      vm.personalOrder.subtotal = vm.personalOrder.subtotal + vm.labor
      vm.personalOrder.total = (vm.personalOrder.subtotal * .08) + vm.personalOrder.subtotal

    }
  }

  const PersonalComponent = {
    template: template,
    controller: personalController
  }

  export default PersonalComponent
