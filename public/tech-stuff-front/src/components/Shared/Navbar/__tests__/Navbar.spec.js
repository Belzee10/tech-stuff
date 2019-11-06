import flushPromises from 'flush-promises';
import { createWrapper, createStore } from '@/test-utils/factories';
import Navbar from '../Navbar.vue';

describe('Navbar.vue', () => {
  test('should render only the "member" options', () => {
    const user = {
      role: 'member'
    };
    const store = createStore({
      getters: {
        user: () => user
      }
    });
    const wrapper = createWrapper(Navbar, {
      store
    });
    wrapper.find('.btn-user').trigger('click');
    const options = wrapper.findAll('.user-options .v-list-item');
    expect(options).toHaveLength(2);
  });

  test('should render "all" the user options', () => {
    const user = {
      role: 'admin'
    };
    const store = createStore({
      getters: {
        user: () => user
      }
    });
    const wrapper = createWrapper(Navbar, {
      store
    });
    wrapper.find('.btn-user').trigger('click');
    const options = wrapper.findAll('.user-options .v-list-item');
    expect(options).toHaveLength(6);
  });

  test('should dispatch a "logout" action and redirect to home', async () => {
    const user = {
      role: 'member'
    };
    const mocks = {
      $router: {
        push: jest.fn(() => Promise.reject())
      }
    };
    const store = createStore({
      getters: {
        user: () => user
      }
    });
    store.dispatch = jest.fn(() => Promise.resolve());
    const wrapper = createWrapper(Navbar, {
      store,
      mocks
    });
    wrapper.find('.btn-user').trigger('click');
    const logout = wrapper.find('.user-options .logout');
    expect(logout.text()).toBe('Logout');
    logout.trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('logout');
    await flushPromises();
    expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'home' });
  });

  test.todo('should render correctly');
});
