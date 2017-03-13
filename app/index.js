'use strict';

import 'angular-material';
// import 'angular-material/angular-material.css';
// import 'roboto-fontface/css/roboto/sass/roboto-fontface-regular.scss';
import 'angular-ui-router';
import 'angular-animate';

import angular from 'angular';

require("./styles/main.css");


import SplashLoginComponent from './splash-login/splash-login.component'


angular.module('app', ['ngMaterial'])
  .component('splashLogin', SplashLoginComponent)
