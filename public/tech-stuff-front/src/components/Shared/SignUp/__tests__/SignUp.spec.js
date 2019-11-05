import { createWrapper, createStore } from '@/test-utils/factories';
import flushPromises from 'flush-promises';
import SignUp from '../SignUp.vue';

const data = {
  name: 'name',
  lastName: 'last name',
  email: 'email@email.com',
  password: '123',
  role: 'member'
};
const mocks = {
  $router: {
    push: jest.fn()
  }
};

describe('SignUp.vue', () => {
  test('should dispatch a "register" action with the correct payload and redirect to "home"', async () => {
    const store = createStore();
    store.dispatch = jest.fn(() => Promise.resolve());
    const wrapper = createWrapper(SignUp, {
      store,
      mocks
    });
    wrapper.find('.v-input.name input').setValue(data.name);
    wrapper.find('.v-input.last-name input').setValue(data.lastName);
    wrapper.find('.v-input.email input').setValue(data.email);
    wrapper.find('.v-input.password input').setValue(data.password);
    wrapper.find('.v-btn').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('register', data);
    await flushPromises();
    expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'home' });
  });

  test('should render an error Alert', async () => {
    const error = 'error';
    const store = createStore({
      getters: {
        errorRegister: () => error
      }
    });
    const wrapper = createWrapper(SignUp, {
      store,
      mocks
    });
    const alert = wrapper.find('.v-alert.error');
    expect(alert.exists()).toBeTruthy();
  });

  test('shoud render correctly', () => {
    const store = createStore();
    const wrapper = createWrapper(SignUp, {
      store,
      mocks
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
