'use strict';


  const adminUserService = function ($http)  {

    const vm = this;

    vm.httpNewUser = function(user) {
      console.log(user);
        // return $http.post('/user', user)
    }

  }

export default adminUserService
