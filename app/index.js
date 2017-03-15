'use strict';

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-animate';

require("./styles/main.css");
require('./img/bokeh.png')


import SplashLoginComponent from './splash-login/splash-login.component'
import splashLoginService from './splash-login/splash-login.service'


angular.module('app', ['ngMaterial', 'ui.router'])
  .component('splashLogin', SplashLoginComponent)

//services
  .service('splashLoginService', splashLoginService)

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

   $urlRouterProvider.otherwise('/')
  }
