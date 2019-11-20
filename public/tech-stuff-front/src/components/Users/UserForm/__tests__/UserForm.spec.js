import { createWrapper } from '@/test-utils/factories';
import UserForm from '../UserForm.vue';

describe('UserForm.vue', () => {
  test('should render correctly', () => {
    const wrapper = createWrapper(UserForm);
    expect(wrapper.element).toMatchSnapshot();
  });
});
