import { createWrapper } from '@/test-utils/factories';
import Pagination from '../Pagination.vue';

describe('Pagination.vue', () => {
  test('should ', () => {
    const wrapper = createWrapper(Pagination);
    expect(wrapper.element).toMatchSnapshot();
  });
});
