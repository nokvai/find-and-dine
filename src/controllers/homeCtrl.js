import style from '../sass/home.scss';

export default class HomeCtrl {
  constructor(businessService) {
    'ngInject';
    this.businessService = businessService;
    this.businesses = [];
    this.style = style;
    this.categories = [];
    this.selectedValue;
  }

  $onInit() {
    navigator.geolocation.getCurrentPosition((response) => {
      this.search(response);
    });
  }

  setBusinesses(data) {
    this.businesses = data;
    const titleData = data.map((v) => {
        const title = v.categories.map((n) => {
          return n.title;
        });
        
        return title[0];
    });

    this.categories = ['All', ...Array.from(new Set(titleData))];
    this.selectedValue = this.categories[0];
  }

  search({ coords }) {
    this.businessService.search(coords).then((response) => {
        this.setBusinesses(response);
    }); 
  }
}
