// import { createWrapper, createStore } from '@/test-utils/factories';
import { createLocalVue, mount } from '@vue/test-utils';
import Vuex from 'vuex';
import ProductsCategories from '../ProductsCategories.vue';
import { generateArray } from '@/helpers';

const localVue = createLocalVue();
localVue.use(Vuex);

describe('ProductsCategories.vue', () => {
  let storeOptions;
  let store;

  beforeEach(() => {
    storeOptions = {
      actions: {
        fetchCategories: jest.fn(() => Promise.resolve())
      },
      getters: {
        categories: jest.fn(),
        errorCategories: jest.fn()
      }
    };
    store = new Vuex.Store(storeOptions);
  });

  test('should render all "categories"', () => {
    const items = generateArray(2, {
      name: '',
      value: ''
    });
    storeOptions.getters.categories.mockReturnValue(items);
    const wrapper = mount(ProductsCategories, {
      store,
      localVue
    });
    const categories = wrapper.findAll('.v-input');
    expect(categories).toHaveLength(items.length);
  });

  test('should render an Alert if there is an error', () => {
    const error = 'error';
    storeOptions.getters.errorCategories.mockReturnValue(error);
    const wrapper = mount(ProductsCategories, {
      store,
      localVue
    });
    const alert = wrapper.find('.v-alert.error--text');
    expect(alert.exists()).toBeTruthy();
  });
});
