import { createWrapper, createStore } from '@/test-utils/factories';
import { generateArray } from '@/helpers';
import UserList from '../UserList.vue';
import Modal from '@/components/Shared/Modal';

describe('UserList.vue', () => {
  test('should render the "users"', () => {
    const items = generateArray(2);
    const store = createStore({
      getters: {
        users: () => items
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    const users = wrapper.findAll('.user');
    expect(users).toHaveLength(items.length);
  });

  test('should render an Alert if there is an error loading the Users', () => {
    const error = 'error';
    const store = createStore({
      getters: {
        errorUsers: () => error
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    const alert = wrapper.find('.v-alert.error--text');
    expect(alert.exists()).toBeTruthy();
  });

  test('should render a Message if there are not Users', () => {
    const store = createStore({
      getters: {
        users: () => []
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    const alert = wrapper.find('.v-alert.alert-message');
    expect(alert.exists()).toBeTruthy();
  });

  test('should emit a "deleteUser" action and update the store', () => {
    const items = generateArray(1);
    const store = createStore({
      getters: {
        users: () => items
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    store.dispatch = jest.fn();
    wrapper.find('.delete-user').trigger('click');
    const modal = wrapper.find(Modal);
    expect(modal.exists()).toBeTruthy();
    modal.find('.confirm').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('deleteUser', items[0].id);
  });

  test.todo('should render correctly');
});
