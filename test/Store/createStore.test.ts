import { Store } from '../../src/Store/createStore';

describe('Store', () => {
    const checkHasProperty = (store: Store, propertyName: string) => {
        expect(store.hasOwnProperty(propertyName)).toEqual(true);
    };

    let curStore: Store | null = null;

    beforeAll(() => {
      curStore = new Store({});
    });

    it('Store was created with needed properties', () => {
      if (curStore) {
        checkHasProperty(curStore, 'state');
        checkHasProperty(curStore, 'params');
        checkHasProperty(curStore, 'getState');
        checkHasProperty(curStore, 'getStateItem');
        checkHasProperty(curStore, 'setState');
        checkHasProperty(curStore, 'onBeforeSetState');
        checkHasProperty(curStore, 'onAfterSetState');
      }
    });
  });
  