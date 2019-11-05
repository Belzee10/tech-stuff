import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import mockAxios from 'jest-mock-axios';
import storeConfig from '../index.js';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('User store', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  test('should dispatch a "register" action with the correct payload and update the store', async () => {
    const data = { name: 'name' };
    mockAxios.post.mockResolvedValueOnce({ data: { user: data } });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('register', data);
    expect(mockAxios.post).toHaveBeenCalledWith('/signup', data);
    await flushPromises();
    expect(store.state.user).toEqual(data);
  });

  test(`should dispatch a failed "register" action and update the store`, async () => {
    const error = 'error';
    mockAxios.post.mockRejectedValueOnce({ message: error });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    expect(store.dispatch('register')).rejects.toEqual(error);
    await flushPromises();
    expect(store.state.errorRegister).toEqual(error);
  });

  test('should dispatch a "login" action with the correct payload and update the store', async () => {
    const data = { name: 'name' };
    mockAxios.post.mockResolvedValueOnce({ data: { user: data } });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('login', data);
    expect(mockAxios.post).toHaveBeenCalledWith('/signin', data);
    await flushPromises();
    expect(store.state.user).toEqual(data);
  });

  test(`should dispatch a failed "login" action and update the store`, async () => {
    const error = 'error';
    mockAxios.post.mockRejectedValueOnce({ message: error });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    expect(store.dispatch('login')).rejects.toEqual(error);
    await flushPromises();
    expect(store.state.errorLogin).toEqual(error);
  });
});
