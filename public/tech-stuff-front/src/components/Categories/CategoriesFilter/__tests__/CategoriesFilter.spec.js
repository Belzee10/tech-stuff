import { createWrapper } from '@/test-utils/factories';
import CategoriesFilter from '../CategoriesFilter.vue';
import { generateArray } from '@/helpers';

describe('CategoriesFilter.vue', () => {
  test('should render all "categories"', () => {
    const props = {
      categories: generateArray(1, {
        name: '',
        value: ''
      })
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    const categories = wrapper.findAll('.v-input');
    expect(categories).toHaveLength(props.categories.length);
  });

  test('should set checked the "value" element', () => {
    const props = {
      categories: generateArray(2, i => ({
        id: i,
        name: `Cat ${i}`
      }))
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: {
        ...props,
        value: 1
      }
    });
    const firstCategory = wrapper.find('.v-radio:last-child input');
    expect(firstCategory.attributes('value')).toBe('1');
  });

  test('should render correctly', () => {
    const props = {
      categories: generateArray(1, {
        name: ''
      })
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
