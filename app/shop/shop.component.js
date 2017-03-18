'use strict';


  import template from 'html-loader!./shop.template.html'

  const shopController = function(shopService)  {
    const vm = this

    vm.$onInit = function() {
      console.log('hello from the shop controller')
      shopService.getInventory()
        .then(inventory =>  {
          vm.inventory = inventory.data.data
          console.log(vm.inventory)
        })
        .catch(err  =>  {
          console.log(err)
        })
  }
}

  const ShopComponent = {
    template: template,
    controller: shopController
  };

export default ShopComponent
