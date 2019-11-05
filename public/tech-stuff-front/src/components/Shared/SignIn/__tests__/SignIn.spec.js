import { createWrapper, createStore } from '@/test-utils/factories';
import flushPromises from 'flush-promises';
import SignIn from '../SignIn.vue';

const data = {
  email: 'email@email.com',
  password: '123'
};
const mocks = {
  $router: {
    push: jest.fn()
  }
};

describe('SignIn.vue', () => {
  test('should dispatch a "login" action with the correct payload and redirect to "home"', async () => {
    const store = createStore();
    store.dispatch = jest.fn(() => Promise.resolve());
    const wrapper = createWrapper(SignIn, {
      store,
      mocks
    });
    wrapper.find('.v-input.email input').setValue(data.email);
    wrapper.find('.v-input.password input').setValue(data.password);
    wrapper.find('.v-btn').trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('login', data);
    await flushPromises();
    expect(mocks.$router.push).toHaveBeenCalledWith({ name: 'home' });
  });

  test('should render an error Alert', async () => {
    const error = 'error';
    const store = createStore({
      getters: {
        errorLogin: () => error
      }
    });
    const wrapper = createWrapper(SignIn, {
      store,
      mocks
    });
    const alert = wrapper.find('.v-alert.error');
    expect(alert.exists()).toBeTruthy();
  });

  test('shoud render correctly', () => {
    const store = createStore();
    const wrapper = createWrapper(SignIn, {
      store,
      mocks
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
