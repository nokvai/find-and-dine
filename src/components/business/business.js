import template from './business.html';
import controller from './businessCtrl';
import './style.scss';

export default {
  template,
  controller,
  controllerAs: 'vm',
  bindings: {
    id: '<',
    name: '<',
    imageSrc: '<',
    phone: '<',
    location: '<',
    rating: '<'
  },
};
