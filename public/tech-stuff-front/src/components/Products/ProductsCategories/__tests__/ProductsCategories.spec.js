import { createWrapper, createStore } from '@/test-utils/factories';
import { generateArray } from '@/helpers';
import ProductsCategories from '../ProductsCategories.vue';

describe('ProductsCategories.vue', () => {
  test('should render all "categories"', () => {
    const items = generateArray(2, {
      name: '',
      value: ''
    });
    const allCategory = {
      name: 'All',
      value: 'ALL'
    };
    const store = createStore({
      getters: {
        categories: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const categories = wrapper.findAll('.category-check');
    expect(categories).toHaveLength(items.length + 1);
    const firstCategory = wrapper.find('.category-check:first-child');
    expect(firstCategory.text()).toBe(allCategory.name);
  });

  test('should render an Alert if there is an error loading the Categories', () => {
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

  test('should render all "products"', () => {
    const items = generateArray(2, {
      name: '',
      value: ''
    });
    const store = createStore({
      getters: {
        products: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const products = wrapper.findAll('.product-card');
    expect(products).toHaveLength(items.length);
  });

  test('should render an Alert if there is an error loading the Products', () => {
    const error = 'error';
    const store = createStore({
      getters: {
        errorProducts: () => error
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const alert = wrapper.find('.v-alert.error--text');
    expect(alert.exists()).toBeTruthy();
  });
});
