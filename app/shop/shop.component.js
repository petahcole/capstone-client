'use strict';


  import template from 'html-loader!./shop.template.html'

  const shopController = function(shopService, moment)  {
    const vm = this

    vm.$onInit = function() {
      console.log('hello from the shop controller')
      shopService.getInventory()
        .then(inventory =>  {
          vm.inventory = inventory.data.data;
          console.log(vm.inventory)
          //need logic to check current month
          //iterate over inSeason and outSeason arrays
          //only send to the front the price form what month it is
        })
        .catch(err  =>  {
          console.log(err)
        })
      }

      vm.add = function() {
          shopService.addItemToCart()
      }


}

  const ShopComponent = {
    template: template,
    controller: shopController
  };

export default ShopComponent
