'use strict';


  const splashLoginService = function ($http, $state)  {

    const vm = this;

    vm.httpLogin = function(login) {
        return $http.post('http://ec2-52-39-174-242.us-west-2.compute.amazonaws.com/users/login', login)
        .then(result  =>  {
          localStorage.setItem('token',result.data.token)
          const payload = localStorage.getItem('token').split('.')[1].replace('-', '+').replace('_', '/');
          const user = JSON.parse(atob(payload));
          if(user.user.isAdmin)  {
            $state.go('admin')
          } else {
            $state.go('shop')
          }
        })
    }

  }

export default splashLoginService
