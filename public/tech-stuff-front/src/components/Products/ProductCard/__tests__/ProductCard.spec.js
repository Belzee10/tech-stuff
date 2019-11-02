import { createWrapper } from '@/test-utils/factories';
import ProductCard from '../ProductCard.vue';

describe('ProductCard.vue', () => {
  test('should emit a "add-to-cart" event', () => {
    const props = {
      id: '1'
    };
    const wrapper = createWrapper(ProductCard, {
      propsData: props
    });
    wrapper.find('.v-btn').trigger('click');
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([props.id]);
  });
  test('should render two "btn-small", emit "add-to-cart" and "remove-from-cart" events', () => {
    const props = {
      id: '1',
      inStock: 2
    };
    const wrapper = createWrapper(ProductCard, {
      propsData: props
    });
    expect(wrapper.find('.btn-full').exists()).toBeFalsy();
    expect(wrapper.findAll('.btn-small')).toHaveLength(2);
    wrapper.find('.btn-small:first-child').trigger('click');
    expect(wrapper.emitted('remove-from-cart')[0]).toEqual([props.id]);
    wrapper.find('.btn-small:last-child').trigger('click');
    expect(wrapper.emitted('add-to-cart')[0]).toEqual([props.id]);
  });
});
