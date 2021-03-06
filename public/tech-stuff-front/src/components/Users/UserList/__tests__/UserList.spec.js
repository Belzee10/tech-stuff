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

  test('should dispatch a "deleteUser" with the correct payload', () => {
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
    modal.find('.confirm-delete').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('deleteUser', items[0].id);
  });

  test('should dispatch a "createUser" action with the correct payload', () => {
    const formValue = {
      name: 'name',
      lastName: 'lastName',
      email: 'email@email.com',
      password: '123',
      role: 'admin'
    };
    const store = createStore();
    const wrapper = createWrapper(UserList, {
      store
    });
    store.dispatch = jest.fn();
    wrapper.find('.new-user').trigger('click');
    const modal = wrapper.find(Modal);
    expect(modal.exists()).toBeTruthy();
    wrapper.find('.name input').setValue(formValue.name);
    wrapper.find('.last-name input').setValue(formValue.lastName);
    wrapper.find('.email input').setValue(formValue.email);
    wrapper.find('.password input').setValue(formValue.password);
    wrapper.find('.role input').setValue(formValue.role);
    modal.find('.submit').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('createUser', formValue);
  });

  test('should dispatch a "editUser" action with the correct payload', () => {
    const items = generateArray(1, {
      name: 'name',
      email: 'email@email.com'
    });
    const store = createStore({
      getters: {
        users: () => items
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    store.dispatch = jest.fn();
    wrapper.find('.edit-user').trigger('click');
    const modal = wrapper.find(Modal);
    expect(modal.exists()).toBeTruthy();
    modal.find('.submit').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('editUser', {
      id: items[0].id,
      data: items[0]
    });
  });

  test('should dispatch a "fetchUsers" action with the correct params', () => {
    const pagination = {
      currentPage: 1,
      lastPage: 2
    };
    const store = createStore({
      getters: {
        pagination: () => pagination
      }
    });
    const wrapper = createWrapper(UserList, {
      store
    });
    store.dispatch = jest.fn();
    const paginationItem = wrapper.findAll('.v-pagination__item');
    expect(paginationItem).toHaveLength(pagination.lastPage);
    wrapper.find('.v-pagination li:last-child button').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('fetchUsers', {
      page: pagination.currentPage + 1
    });
  });

  test.todo('should render correctly');
});
