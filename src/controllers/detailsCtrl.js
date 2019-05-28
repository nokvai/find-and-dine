import style from '../sass/details.scss';

export default class DetailsCtrl {
  constructor($stateParams, businessService) {
    'ngInject';
    this.style = style;
    this.businessService = businessService;
    this.stateParam = $stateParams;
  }

  $onInit() {
    this.businessService.view(this.stateParam.id).then((res) => {
      console.log(res);
    });

  }

}
