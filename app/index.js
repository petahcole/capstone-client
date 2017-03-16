'use strict';

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-animate';

require("./styles/main.css");
require('./img/bokeh.png')


import SplashLoginComponent from './splash-login/splash-login.component'
import splashLoginService from './splash-login/splash-login.service'
import AdminSplashComponent from './admin/admin-splash.component'
import adminUserService from './admin/admin-splash.service'



angular.module('app', ['ngMaterial', 'ui.router'])
  .component('splashLogin', SplashLoginComponent)
  .component('adminSplash', AdminSplashComponent)

//services
  .service('splashLoginService', splashLoginService)
  .service('adminUserService', adminUserService)

//ui-router config

.config(config)

config.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];

function config($stateProvider, $urlRouterProvider, $locationProvider) {

	$locationProvider.html5Mode(true);

	$stateProvider
        .state({
          name: 'home',
          url: '/',
          component:  'splashLogin'
        })
        .state({
          name: 'admin',
          url: '/',
          component: 'adminSplash'
        })

   $urlRouterProvider.otherwise('/')
  }
