'use strict';


  import template from 'html-loader!./shop.template.html'

  const shopController = function(shopService, moment)  {
    const vm = this

    vm.$onInit = function() {

      vm.date = 3

      shopService.getInventory()
        .then(inventory =>  {
          vm.inventory = inventory.data.data;
          vm.inventory.forEach(item =>  {
            item.inSeason.forEach(month =>  {
              if(vm.date == month) {
                  console.log(vm.date)
                return item.price = item.price[0]

              } else {
                console.log('shits broken')
              }
            })
          })
        })
        .catch(err  =>  {
          console.log(err)
        })
      }

      vm.add = function(amount, inventory) {
          shopService.addItemToCart(amount, inventory)
          vm.shoppingCart = shopService.shoppingCart
      }


}

  const ShopComponent = {
    template: template,
    controller: shopController
  };

export default ShopComponent
