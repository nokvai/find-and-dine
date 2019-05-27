import style from '../sass/details.scss';

export default class DetailsCtrl {
  constructor($stateParams) {
    'ngInject';
    this.style = style;
    this.stateParam = $stateParams;
  }

  $onInit() {
    console.log(this.stateParam.id);
  }

}
