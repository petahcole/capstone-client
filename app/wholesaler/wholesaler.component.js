'use strict';


  import template from 'html-loader!./wholesaler.template.html'

  const wholesalerController = function(wholesalerService)  {
    const vm = this

    vm.$onInit = function() {
      vm.isVisible = false;
    }

    vm.toggleForm = function() {
      vm.isVisible = !vm.isVisible;
    }
  }

  const WholesalerComponent = {
    template: template,
    controller: wholesalerController
  };

export default WholesalerComponent
