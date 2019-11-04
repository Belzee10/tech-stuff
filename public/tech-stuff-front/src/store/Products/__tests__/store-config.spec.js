import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import mockAxios from 'jest-mock-axios';
import storeConfig from '../index.js';
import { generateArray } from '@/helpers';

const localVue = createLocalVue();
localVue.use(Vuex);

const url = `/products`;

describe('Products store', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test(`should dispatch a "fetchProducts" action and update the store`, async () => {
    const items = generateArray(2);
    mockAxios.get.mockResolvedValueOnce({ data: items });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchProducts');
    expect(mockAxios.get).toHaveBeenCalledWith(`${url}/all`);
    await flushPromises();
    expect(store.state.products).toEqual(items);
  });

  test(`should dispatch a failed "fetchProducts" action and update the store`, async () => {
    const error = 'error';
    mockAxios.get.mockRejectedValueOnce({ message: error });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchProducts');
    await flushPromises();
    expect(store.state.errorProducts).toEqual(error);
  });

  test('should dispatch a "fetchProductsByCategory" action and update the store', async () => {
    const items = generateArray(2);
    const categoryId = 1;
    mockAxios.get.mockResolvedValueOnce({ data: items });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchProductsByCategory', categoryId);
    expect(mockAxios.get).toHaveBeenCalledWith(
      `${url}/product-by/${categoryId}`
    );
    await flushPromises();
    expect(store.state.products).toEqual(items);
  });

  test(`should dispatch a failed "fetchProductsByCategory" action and update the store`, async () => {
    const error = 'error';
    mockAxios.get.mockRejectedValueOnce({ message: error });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchProductsByCategory');
    await flushPromises();
    expect(store.state.errorProducts).toEqual(error);
  });

  test('should dispatch a "changeView" action and update the store', () => {
    const view = 'items';
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('changeView', view);
    expect(store.state.view).toEqual(view);
  });

  test('should dispatch a "searchProducts" action and update the store', async () => {
    const query = 'query';
    const items = generateArray(2);
    mockAxios.get.mockResolvedValueOnce({ data: items });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('searchProducts', query);
    expect(mockAxios.get).toHaveBeenCalledWith(`${url}/all`, {
      params: {
        search: query
      }
    });
    await flushPromises();
    expect(store.state.products).toEqual(items);
  });
});
