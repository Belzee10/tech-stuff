import Vuex from 'vuex';
import { createLocalVue } from '@vue/test-utils';
import flushPromises from 'flush-promises';
import mockAxios from 'jest-mock-axios';
import storeConfig from '../index.js';
import { generateArray } from '@/helpers';

const localVue = createLocalVue();
localVue.use(Vuex);

const url = '/users';

describe('User store', () => {
  afterEach(() => {
    mockAxios.reset();
  });

  beforeEach(() => {
    localStorage.setItem.mockClear();
    localStorage.clear.mockClear();
  });

  test('should dispatch a "register" action with the correct payload and update the store', async () => {
    const data = { name: 'name', token: 'token' };
    mockAxios.post.mockResolvedValueOnce({ data: { user: data } });

    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('register', data);
    expect(mockAxios.post).toHaveBeenCalledWith('/signup', data);
    await flushPromises();
    expect(store.state.user).toEqual(data);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify(data)
    );
  });

  test(`should dispatch a failed "register" action and update the store`, async () => {
    const error = 'error';
    mockAxios.post.mockRejectedValueOnce({ message: error });

    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    expect(store.dispatch('register')).rejects.toEqual(error);
    await flushPromises();
    expect(store.state.errorRegister).toEqual(error);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  test('should dispatch a "login" action with the correct payload and update the store', async () => {
    const data = { name: 'name', token: 'token' };
    mockAxios.post.mockResolvedValueOnce({ data: { user: data } });

    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('login', data);
    expect(mockAxios.post).toHaveBeenCalledWith('/signin', data);
    await flushPromises();
    expect(store.state.user).toEqual(data);
    expect(localStorage.setItem).toHaveBeenCalledWith(
      'user',
      JSON.stringify(data)
    );
  });

  test(`should dispatch a failed "login" action and update the store`, async () => {
    const error = 'error';
    mockAxios.post.mockRejectedValueOnce({ message: error });

    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    expect(store.dispatch('login')).rejects.toEqual(error);
    await flushPromises();
    expect(store.state.errorLogin).toEqual(error);
    expect(localStorage.setItem).not.toHaveBeenCalled();
  });

  test('should dispatch a "logout" action, update the store and clear the localStorage', async () => {
    expect.assertions(3);
    const data = { name: 'name', token: 'token' };
    mockAxios.delete.mockResolvedValue('');
    localStorage.getItem.mockImplementation(() => JSON.stringify(data));

    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('logout');
    expect(mockAxios.delete).toHaveBeenCalledWith('/logout');
    await flushPromises();
    expect(store.state.user).toBeNull();
    expect(localStorage.removeItem).toHaveBeenCalledWith('user');
  });

  test('should dispatch a "fetchUsers" action and update the store', async () => {
    expect.assertions(2);
    const items = generateArray(2);
    const params = {};
    mockAxios.get.mockResolvedValueOnce({ data: { data: items } });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchUsers', params);
    expect(mockAxios.get).toHaveBeenCalledWith(url, { params });
    await flushPromises();
    expect(store.state.users).toEqual(items);
  });

  test('should dispatch a failed "fetchUsers" action and update the store', async () => {
    expect.assertions(1);
    const error = 'error';
    mockAxios.get.mockRejectedValueOnce({ message: error });
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    store.dispatch('fetchUsers');
    await flushPromises();
    expect(store.state.errorUsers).toEqual(error);
  });

  test('should dispatch a "deleteUser" action and update the store', async () => {
    expect.assertions(2);
    mockAxios.delete.mockResolvedValueOnce({});
    const newStore = { ...storeConfig };
    const store = new Vuex.Store(newStore);
    const userId = store.state.users[0].id;
    const newUsers = [...store.state.users];
    const result = newUsers.filter(item => item.id !== userId);
    store.dispatch('deleteUser', userId);
    expect(mockAxios.delete).toHaveBeenCalledWith(`${url}/${userId}`);
    await flushPromises();
    expect(store.state.users).toEqual(result);
  });
});
