import template from './banner.html';
import controller from './bannerCtrl';
import './style.scss';

export default {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    name: '<'
  },
};
