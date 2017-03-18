'use strict';


  const splashLoginService = function ($http, $state)  {

    const vm = this;

    vm.httpLogin = function(login) {
        return $http.post('http://localhost:3500/users/login', login)
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
