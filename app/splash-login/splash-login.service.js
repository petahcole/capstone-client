'use strict';


  const splashLoginService = function ($http)  {

    const vm = this;

    vm.httpLogin = function(login) {
      console.log(login);
        return $http.post('/login', login)
    }

  }

export default splashLoginService
