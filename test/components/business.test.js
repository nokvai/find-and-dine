import angular from 'angular';
import 'angular-mocks';
import businessModule from 'Components/business';

describe('<business></business>', () => {
  let element;
  let scope;
  let controller;

  const name = 'John';
  const imageSrc = 'http://imageurl.com';

  beforeEach(angular.mock.module(businessModule));

  beforeEach(
    angular.mock.inject(($rootScope, $compile) => {
      scope = $rootScope.$new();
      element = angular.element(
        `<business name="\'${name}\'" image-src=" \'${imageSrc}\' "></business>`
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
});
