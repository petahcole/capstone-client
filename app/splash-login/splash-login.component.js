'use strict';


  import template from 'html-loader!./splash-login.template.html'

    const splashLoginController = function()  {

      const vm = this;

      vm.$onInit = function() {
        console.log('init init init');
      }
      console.log('hello from the login page');
    }

    const SplashLoginComponent = {
      template: template,
      controller: splashLoginController
    };

  export default SplashLoginComponent
