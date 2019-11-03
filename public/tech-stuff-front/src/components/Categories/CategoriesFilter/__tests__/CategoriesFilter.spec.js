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
        name: `Cat ${i}`,
        value: `Cat ${i}`
      }))
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: {
        ...props,
        value: 'Cat 1'
      }
    });
    const firstCategory = wrapper.find('.v-radio:last-child input');
    expect(firstCategory.attributes('value')).toBe('Cat 1');
  });

  test('should emit a "check" event', () => {
    const props = {
      categories: generateArray(2, i => ({
        id: i,
        name: `Cat ${i}`,
        value: `Cat ${i}`
      }))
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: {
        ...props,
        value: 'Cat 1'
      }
    });
    wrapper.find('.v-radio input:first-child').setChecked(true);
    expect(wrapper.emitted('check')[0]).toEqual([props.categories[0].value]);
  });

  test('should render correctly', () => {
    const props = {
      categories: generateArray(1, {
        name: '',
        value: ''
      })
    };
    const wrapper = createWrapper(CategoriesFilter, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
