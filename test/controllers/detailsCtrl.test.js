import DetailsCtrl from 'Controllers/detailsCtrl';

const id = 'Oh0yiXDjGGafjgPM_N61ew';


const mockBusinessService = {
  view() {
    return new Promise(resolve => resolve([{ name: 'Matina Town Square' }]));
  },
};

describe('detailsCtrl', () => {
  test('should have a style property on controller', () => {
    const controller = new DetailsCtrl(mockBusinessService);
    expect(controller).toHaveProperty('style');
  });

  test('should set businesses property on calling loadGoogleMap', () => {
    const controller = new DetailsCtrl(mockBusinessService);
    controller.loadGoogleMap([{ latitude: 7.0628563130841, longitude: 125.596970804036  }]);
    const expected = [{ name: 'Matina Town Square' }];
    expect(controller.businesses).toEqual(expected);
  });

  test('should update businesses property on calling view method', async () => {
    const controller = new DetailsCtrl(mockBusinessService);
    await controller.view(id);
    const expected = [{ name: 'Matina Town Square' }];
    expect(controller.businesses).toEqual(expected);
  });
});
