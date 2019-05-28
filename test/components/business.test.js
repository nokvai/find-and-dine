import angular from 'angular';
import 'angular-mocks';
import businessModule from 'Components/business';

describe('<business></business>', () => {
  let element;
  let scope;
  let controller;

  const name = 'John';
  const imageSrc = 'http://imageurl.com';
  const phone = '+63822859648';
  const location = '223 V. Mapa Street, Davao City, 8000 Davao del Sur, Philippines';
  const id = 'lHwk_A-Z7eYxZOv_Gi0heA';
  const rating = 4.5;


  beforeEach(angular.mock.module(businessModule));

  beforeEach(
    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = angular.element(
        `<business name="\'${name}\'" image-src=" \'${imageSrc}\' phone="\'${phone}\'" location="\'${location}\'" rating="\'${rating}\'" id="\'${id}\'" "></business>`
      );
      element = $compile(element)(scope);
      controller = element.controller('business');
      scope.$apply();
    })
  );

  test('should assign name on controller', () => {
    expect(controller.name).toEqual(name);
  });

  test('should assign image src on controller', () => {
    expect(controller.imageSrc).toEqual(imageSrc);
  });

  test('should assign phone on controller', () => {
    expect(controller.phone).toEqual(phone);
  });

  test('should assign location on controller', () => {
    expect(controller.location).toEqual(location);
  });

  test('should assign rating on controller', () => {
    expect(controller.rating).toEqual(rating);
  });

  test('should assign id on controller', () => {
    expect(controller.id).toEqual(id);
  });
});
