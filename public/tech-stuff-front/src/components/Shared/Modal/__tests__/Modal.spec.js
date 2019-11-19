import { createWrapper } from '@/test-utils/factories';
import Modal from '../Modal.vue';

describe('Modal.vue', () => {
  test('should render correctly', () => {
    const wrapper = createWrapper(Modal);
    expect(wrapper.element).toMatchSnapshot();
  });
});
