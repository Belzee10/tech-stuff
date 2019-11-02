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
  test(`should dispatch a "fetchProducts" action and update the store`, async () => {
    const items = generateArray(2);
    mockAxios.get.mockResolvedValueOnce({ data: { data: items } });
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
});
