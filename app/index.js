'use strict';

import angular from 'angular';
import 'angular-material';
import 'angular-ui-router';
import 'angular-animate';
import 'angular-moment';
import 'angular-sanitize'
import 'ng-csv';

require("./styles/main.css");
require('./img/bokeh.png');


import SplashLoginComponent from './splash-login/splash-login.component'
import splashLoginService from './splash-login/splash-login.service'
import AdminSplashComponent from './admin/admin-splash.component'
import adminUserService from './admin/admin-splash.service'
import WholesalerComponent from './wholesaler/wholesaler.component'
import wholesalerService from './wholesaler/wholesaler.service'
import ShopComponent from './shop/shop.component'
import shopService from './shop/shop.service'
import OrderComponent from './order/order.component'
// import shopService from './shop/shop.service'



angular.module('app', ['ngMaterial', 'ui.router', 'angularMoment', 'ngSanitize', 'ngCsv'])
  .component('splashLogin', SplashLoginComponent)
  .component('adminSplash', AdminSplashComponent)
  .component('wholesaler', WholesalerComponent)
  .component('shop', ShopComponent)
  .component('order', OrderComponent)

//services
  .service('splashLoginService', splashLoginService)
  .service('adminUserService', adminUserService)
  .service('wholesalerService', wholesalerService)
  .service('shopService', shopService)

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
          url: '/admin',
          component: 'adminSplash'
        })
        .state({
          name: 'wholesaler',
          url: '/wholesaler',
          component: 'wholesaler'
        })
        .state({
          name: 'shop',
          url: '/shop',
          component: 'shop'
        })
        .state({
          name: 'order',
          url: '/order',
          component: 'order'
        })

   $urlRouterProvider.otherwise('/')
  }
