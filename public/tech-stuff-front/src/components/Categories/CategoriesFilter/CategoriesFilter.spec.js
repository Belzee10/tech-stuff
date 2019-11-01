import { createWrapper } from '@/test-utils/factories';
import CategoriesFilter from './CategoriesFilter.vue';

describe('CategoriesFilter.vue', () => {
  const props = {
    categories: [{}]
  };
  test('should render all "categories"', () => {
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    const categories = wrapper.findAll('.v-input');
    expect(categories).toHaveLength(1);
  });

  test('should render correctly', () => {
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
