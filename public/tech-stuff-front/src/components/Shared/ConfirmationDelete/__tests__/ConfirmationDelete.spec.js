import { createWrapper } from '@/test-utils/factories';
import ConfirmationDelete from '../ConfirmationDelete.vue';

describe('ConfirmationDelete.vue', () => {
  test('should ', () => {
    const wrapper = createWrapper(ConfirmationDelete);
    expect(wrapper.element).toMatchSnapshot();
  });
});
