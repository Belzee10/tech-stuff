import { createWrapper, createStore } from '@/test-utils/factories';
import flushPromises from 'flush-promises';
import ProductDetails from '../ProductDetails.vue';

const productId = 1;

describe('ProductDetails.vue', () => {
  test('should dispatch a "fetchProduct" with the correct payload', async () => {
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

  test('should render correctly', () => {
    const store = createStore();
    const wrapper = createWrapper(ProductDetails, {
      store,
      mocks: {
        $route: {
          params: {
            productId
          }
        }
      }
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
