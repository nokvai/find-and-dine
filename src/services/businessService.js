import businessBuilderForUI from 'Mappers/businessBuilderForUI';

export default class BusinessService {
  
  constructor($http) {
    'ngInject';

    this.$http = $http;
    this.apiBaseUrl = 'businesses';
  }

  search({ latitude, longitude }) {
    return this.$http
      .get(`${process.env.API_SERVER_URL}/${this.apiBaseUrl}/search`, {
        params: {
          latitude,
          longitude,
        },
      })
      .then((data) => {
        return data && data.data.businesses.map(businessBuilderForUI); 
      })
      .catch(({ data }) => data);
  }
}
