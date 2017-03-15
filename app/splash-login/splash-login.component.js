'use strict';


  import template from 'html-loader!./splash-login.template.html'

    const splashLoginController = function(splashLoginService)  {

      const vm = this;

      vm.$onInit = function() {

        vm.isVisible = false;
      }

      vm.toggleLogin = function() {
        vm.isVisible = !vm.isVisible;
      }

      vm.submitLogin  = function(e)  {
        e.preventDefault();
        splashLoginService.httpLogin(vm.login)
      }

    }



    const SplashLoginComponent = {
      template: template,
      controller: splashLoginController
    };

  export default SplashLoginComponent
