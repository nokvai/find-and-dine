import DetailsCtrl from 'Controllers/detailsCtrl';

const id = 'lHwk_A-Z7eYxZOv_Gi0heA';

const mockBusinessService = {
  search() {
    return new Promise(resolve => resolve([{ name: 'Sea Food Restaurant' }]));
  },
};

describe('detailsCtrl', () => {
  test('should have a style property on controller', () => {
    const controller = new DetailsCtrl(mockBusinessService);
    expect(controller).toHaveProperty('style');
  });

  test('shouldcall view method $onInit', () => {
    const controller = new DetailsCtrl(mockBusinessService);
    const mockId = {
      getCurrentPosition(callback) {
        callback(id);
      },
    };

    controller.view = jest.fn();

    global.navigator.id = mockId;
    controller.$onInit();
    expect(controller.view.mock.calls.length).toBe(1);
  });

  test('should set businesses property on calling setBusinesses', () => {
    const controller = new DetailsCtrl(mockBusinessService);
    controller.setBusinesses([{ name: 'Sea Food Restaurant' }]);
    const expected = [{ name: 'Sea Food Restaurant' }];
    expect(controller.businesses).toEqual(expected);
  });

  test('should update businesses property on calling view method', async () => {
    const controller = new DetailsCtrl(mockBusinessService);
    await controller.view(id);
    const expected = [{ name: 'Sea Food Restaurant' }];
    expect(controller.businesses).toEqual(expected);
  });
});
