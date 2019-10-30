import { createWrapper } from '@/test-utils/factories';
import NavigationDraw from './NavigationDraw.vue';

describe('NavigationDraw.vue', () => {
  const props = {
    userOptions: [
      {
        name: '',
        link: ''
      }
    ]
  };
  test('should render all the "user options"', () => {
    const wrapper = createWrapper(NavigationDraw, {
      propsData: props
    });
    const listItems = wrapper.findAll('.v-list');
    expect(listItems).toHaveLength(1);
  });
});
