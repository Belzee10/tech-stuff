import { createWrapper } from '@/test-utils/factories';
import CategoriesFilter from '../CategoriesFilter.vue';
import { generateArray } from '@/helpers';

describe('CategoriesFilter.vue', () => {
  const props = {
    categories: generateArray(2, {
      name: '',
      value: ''
    })
  };
  test('should render all "categories"', () => {
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    const categories = wrapper.findAll('.v-input');
    expect(categories).toHaveLength(props.categories.length);
  });

  test('should render correctly', () => {
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
