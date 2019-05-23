import style from '../sass/home.scss';

export default class HomeCtrl {
 
  constructor(businessService) {
    'ngInject';
    this.businessService = businessService;
    this.businesses = [];
    this.style = style;
  }

  $onInit() {
    navigator.geolocation.getCurrentPosition((response) => {
      this.search(response);
    });
  }

  setBusinesses(data) {
   console.log('data:', data);
    this.businesses = data;
  }

  search({ coords }) {    
    this.businessService.search(coords).then((response) => {
        this.setBusinesses(response);
    }); 
  }
}
