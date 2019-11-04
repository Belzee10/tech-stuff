import { createWrapper, createStore } from '@/test-utils/factories';
import { generateArray, generateNumber } from '@/helpers';
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
        products: () => items,
        view: () => 'cards'
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

  test('should dispatch a "fetchProductsByCategory" action with the correct payload', () => {
    const items = generateArray(2, i => {
      return {
        id: i,
        name: `Name ${i}`
      };
    });
    const store = createStore({
      getters: {
        categories: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    store.dispatch = jest.fn(() => Promise.resolve());
    wrapper.find('.v-radio:last-child input').setChecked(true);
    expect(store.dispatch).toHaveBeenCalledWith(
      'fetchProductsByCategory',
      items[1].id
    );
  });

  test('should render all products sorted "ASC"', () => {
    const items = generateArray(10, i => {
      return {
        id: i,
        price: generateNumber(1, 100)
      };
    });
    const newItems = [...items];
    const ascItems = newItems.sort((a, b) => a.price - b.price);
    const store = createStore({
      getters: {
        products: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    const prices = wrapper.findAll('.product-card .price');
    prices.wrappers.forEach((wrap, i) => {
      expect(wrap.text()).toContain(ascItems[i].price);
    });
  });

  test('should sort the products "DESC"', () => {
    const items = generateArray(10, i => {
      return {
        id: i,
        price: generateNumber(1, 100)
      };
    });
    const newItems = [...items];
    const descItems = newItems.sort((a, b) => b.price - a.price);
    const store = createStore({
      getters: {
        products: () => items
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    wrapper.find('.v-select').vm.$emit('change', 'DESC');

    const prices = wrapper.findAll('.product-card .price');
    prices.wrappers.forEach((wrap, i) => {
      expect(wrap.text()).toContain(descItems[i].price);
    });
  });

  test('should dispatch a "changeView" action with the correct payload', () => {
    const view = 'items';
    const items = generateArray(2, {
      name: '',
      value: ''
    });
    const store = createStore({
      getters: {
        products: () => items,
        view: () => 'cards'
      }
    });
    const wrapper = createWrapper(ProductsCategories, {
      store
    });
    store.dispatch = jest.fn();

    wrapper.find(`.v-item-group button.${view}`).trigger('click');
    expect(store.dispatch).toHaveBeenCalledWith('changeView', view);
  });
});
