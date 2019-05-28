import style from './style.scss';

export default class BusinessCtrl {
  constructor() {
    'ngInject';
    this.style = style;
    this.ratings = 0;
  }

  $onInit() {
     this.ratings = this.roundOff(this.rating);
  }

  roundOff(rate) {
    return Math.round(rate);
  }
  
}
