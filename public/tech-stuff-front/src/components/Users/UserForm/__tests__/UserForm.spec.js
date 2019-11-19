import { createWrapper } from '@/test-utils/factories';
import UserForm from '../UserForm.vue';

describe('UserForm.vue', () => {
  test('should emit a "submit" event with the correct payload', () => {
    const wrapper = createWrapper(UserForm);
    const formValue = {
      name: 'name',
      lastName: 'lastName',
      email: 'email@email.com',
      password: '123',
      role: 'admin'
    };
    const button = wrapper.find('.v-btn.submit');
    wrapper.find('.name input').setValue(formValue.name);
    wrapper.find('.last-name input').setValue(formValue.lastName);
    wrapper.find('.email input').setValue(formValue.email);
    wrapper.find('.password input').setValue(formValue.password);
    wrapper.find('.role input').setValue(formValue.role);
    button.trigger('click');
    expect(wrapper.emitted('submit')[0]).toEqual([formValue]);
  });

  test.todo('should render correctly');
});
