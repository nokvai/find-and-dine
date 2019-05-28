import businessBuilderForUI from 'Mappers/businessBuilderForUI';
import businessDetailMapper from 'Mappers/businessDetailMapper';

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

  view(id) {
    return this.$http
    .get(`${process.env.API_SERVER_URL}/${this.apiBaseUrl}/${id}`)
    .then((data) => {
      return data && businessDetailMapper(data.data);
    })
    .catch(({ data }) => data);
  }
}
