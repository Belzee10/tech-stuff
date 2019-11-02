import { createWrapper, createStore } from '@/test-utils/factories';
import { generateArray } from '@/helpers';
import ProductsCategories from '../ProductsCategories.vue';

describe('ProductsCategories.vue', () => {
  test('should render all "categories"', () => {
    const items = generateArray(2, {
      name: '',
      value: ''
    });
    const store = createStore({
      getters: {
        categories: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const categories = wrapper.findAll('.category-check.v-input');
    expect(categories).toHaveLength(items.length);
  });

  test('should render an Alert if there is an error', () => {
    const error = 'error';
    const store = createStore({
      getters: {
        errorCategories: () => error
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const alert = wrapper.find('.v-alert.error--text');
    expect(alert.exists()).toBeTruthy();
  });
});
