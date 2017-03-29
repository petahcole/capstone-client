'use strict';


  const adminUserService = function ($http)  {

    const vm = this;

    vm.httpNewUser = function(user) {
      console.log(user);
        return $http.post('https://ec2-52-39-174-242.us-west-2.compute.amazonaws.com/users/new', user)
    }

  }

export default adminUserService
