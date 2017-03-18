'use strict';


  const adminUserService = function ($http)  {

    const vm = this;

    vm.httpNewUser = function(user) {
      console.log(user);
        return $http.post('http://localhost:3500/users/new', user)
    }

  }

export default adminUserService
