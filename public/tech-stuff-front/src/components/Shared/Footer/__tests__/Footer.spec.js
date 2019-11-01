import { createWrapper } from '@/test-utils/factories';
import Footer from '../Footer.vue';

describe('Footer.vue', () => {
  test('should render correctly', () => {
    const wrapper = createWrapper(Footer);
    expect(wrapper.element).toMatchSnapshot();
  });
});
