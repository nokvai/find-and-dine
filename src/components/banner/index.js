import angular from 'angular';
import banner from './banner';

export default angular
  .module('components.banner', [])
  .component('banner', banner).name;
