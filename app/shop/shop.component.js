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
            item.soldAs = item.soldAs[0];
            for (var i = 0; i < item.inSeason.length; i++) {
                if(item.inSeason.includes(vm.date)){
                  item.price = item.price[0];
                } else {
                  item.price = item.price[1]
                }
                return item.price
            }
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

      vm.confirm = function() {
        shopService.confirmOrder()
      }


}

  const ShopComponent = {
    template: template,
    controller: shopController
  };

export default ShopComponent
