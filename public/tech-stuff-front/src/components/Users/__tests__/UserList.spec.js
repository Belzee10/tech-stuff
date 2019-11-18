import { createWrapper, createStore } from '@/test-utils/factories';
import { generateArray } from '@/helpers';
import UserList from '../UserList.vue';

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
});
