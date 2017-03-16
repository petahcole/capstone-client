import template from 'html-loader!./admin-splash.template.html'

const AdminSplashController = function(adminUserService)  {

  const vm = this;

  vm.$onInit = function() {
    vm.isVisible = false;
  }

  vm.toggleForm = function() {
    vm.isVisible = !vm.isVisible;
  }

  vm.submitNewUser  = function(e)  {
    e.preventDefault();
    adminUserService.httpNewUser(vm.user)
  }

}

const AdminSplashComponent = {
  template: template,
  controller: AdminSplashController
};

export default AdminSplashComponent
