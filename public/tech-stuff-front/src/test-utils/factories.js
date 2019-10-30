import { mount, createLocalVue } from '@vue/test-utils';
import mergeWith from 'lodash.mergewith';

const localVue = createLocalVue();

const createWrapper = (Component, overrides) => {
  const defaultMountingOptions = {
    mocks: {},
    localVue,
    store: {}
  };
  return mount(Component, mergeWith(defaultMountingOptions, overrides));
};

export { createWrapper };
