import { createWrapper, createStore } from '@/test-utils/factories';
import flushPromises from 'flush-promises';
import ProductDetails from '../ProductDetails.vue';

describe('ProductDetails.vue', () => {
  test('should dispatch a "fetchProduct" with the correct payload', async () => {
    const productId = 1;
    const store = createStore();
    store.dispatch = jest.fn(() => Promise.resolve());

    createWrapper(ProductDetails, {
      store,
      mocks: {
        $route: {
          params: {
            productId
          }
        }
      }
    });
    await flushPromises();
    expect(store.dispatch).toHaveBeenCalledWith('fetchProduct', productId);
  });
});
