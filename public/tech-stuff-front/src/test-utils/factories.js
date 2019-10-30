import { mount, createLocalVue } from '@vue/test-utils';
import mergeWith from 'lodash.mergewith';
import Vuetify from 'vuetify';

const localVue = createLocalVue();

let vuetify;

beforeEach(() => {
  vuetify = new Vuetify();
});

const customizer = (_, srcValue) => {
  if (Array.isArray(srcValue)) {
    return srcValue;
  }
  if (srcValue instanceof Object && Object.keys(srcValue).length === 0) {
    return srcValue;
  }
};

const createWrapper = (Component, overrides) => {
  const defaultMountingOptions = {
    localVue,
    vuetify
  };
  return mount(
    Component,
    mergeWith(defaultMountingOptions, overrides, customizer)
  );
};

export { createWrapper };
