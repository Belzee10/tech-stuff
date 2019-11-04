import { createWrapper } from '@/test-utils/factories';
import ItemsOptions from '../ItemsOptions.vue';

describe('ItemsOptions.vue', () => {
  test('should emit a "change-view" event', () => {
    const props = {
      viewValue: 'cards'
    };
    const wrapper = createWrapper(ItemsOptions, {
      propsData: props
    });
    wrapper.find('.v-item-group button.items').trigger('click');
    expect(wrapper.emitted('change-view')[0]).toEqual(['items']);
  });

  test('should emit a "sort-by-price" event', () => {
    const props = {
      sortValue: 'ASC'
    };
    const wrapper = createWrapper(ItemsOptions, {
      propsData: props
    });
    wrapper.find('.v-select').vm.$emit('change', 'DESC');
    expect(wrapper.emitted('sort-by-price')[0]).toEqual(['DESC']);
  });

  test('should emit a "search" event', () => {
    const value = 'q';
    const wrapper = createWrapper(ItemsOptions);
    wrapper.find('.v-text-field input').setValue(value);
    expect(wrapper.emitted('search')[0]).toEqual([value]);
  });

  test('should render correctly', () => {
    const props = {
      sortValue: 'ASC',
      viewValue: 'cards'
    };
    const wrapper = createWrapper(ItemsOptions, {
      propsData: props
    });
    expect(wrapper.element).toMatchSnapshot();
  });
});
