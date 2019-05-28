import style from '../sass/details.scss';
import moment from 'moment';

export default class DetailsCtrl {
  constructor($stateParams, businessService) {
    'ngInject';
    this.style = style;
    this.businessService = businessService;
    this.stateParam = $stateParams;
    this.detail = [];
    this.start = '';
    this.end = '';
  }

  $onInit() {
    this.businessService.view(this.stateParam.id).then((res) => {
        this.detail = res;
        this.loadGoogleMap(this.detail.coordinates.latitude, this.detail.coordinates.longitude);
    });
  }

  formatTime(time) {
    return  moment(time.substring(0, 2).concat(':').concat(time.substring(2, 4)), 'hh:mm a').format('HH:mm A'); 
  }
  formatDay(n) {
   return ['MONDAY', 'TUESDAY', 'WEDNESDAY', 'THURSDAY', 'FRIDAY', 'SATURDAY', 'SUNDAY'][n];
  }

  loadGoogleMap(long, lat) {
    const maps = new google.maps.Map(document.getElementById('googlemap'), {
        zoom: 18,
        center: { lat: long, lng: lat }
    });

    new google.maps.Marker({
        position: new google.maps.LatLng(long, lat),
        map: maps,
        title: this.detail.name
    });
  }
}
