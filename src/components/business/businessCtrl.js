import style from './style.scss';

export default class BusinessCtrl {
  constructor() {
    'ngInject';
    this.style = style;
    this.isVisible = false;
  }

  $onInit() {
    if (this.id) {
      this.isVisible = true;
    } else {
      this.isVisible = false;
    }
  }
  
  roundOff(rate) {
    return Math.round(rate);
  }

}
