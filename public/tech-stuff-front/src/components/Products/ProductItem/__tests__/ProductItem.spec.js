import { createWrapper } from '@/test-utils/factories';
import ProductItem from '../ProductItem.vue';

describe('ProductItem.vue', () => {
  test('should emit a "add-to-cart" event', () => {
    const props = {
      id: 1
    };
    const wrapper = createWrapper(ProductItem, {
      propsData: props
    });
    wrapper.find('.v-btn').trigger('click');
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([props.id]);
  });
  test('should render two "btn-small", emit "add-to-cart" and "remove-from-cart" events', () => {
    const props = {
      id: 1,
      inStock: 2
    };
    const wrapper = createWrapper(ProductItem, {
      propsData: props
    });
    expect(wrapper.find('.btn-full').exists()).toBeFalsy();
    expect(wrapper.findAll('.btn-small')).toHaveLength(2);
    wrapper.find('.btn-small.remove').trigger('click');
    expect(wrapper.emitted('remove-from-cart')[0]).toEqual([props.id]);
    wrapper.find('.btn-small.add').trigger('click');
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([props.id]);
  });

  test('should render correctly', () => {
    const wrapper = createWrapper(ProductItem);
    expect(wrapper.element).toMatchSnapshot();
  });
});
