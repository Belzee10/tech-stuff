import { mount, createLocalVue } from '@vue/test-utils';
import mergeWith from 'lodash.mergewith';
import Vuetify from 'vuetify';
import Vuex from 'vuex';
import mockAxios from 'jest-mock-axios';

const localVue = createLocalVue();

let vuetify;

beforeEach(() => {
  vuetify = new Vuetify();
});

afterEach(() => {
  mockAxios.reset();
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

// TODO implement and use this factory func
const createStore = overrides => {
  const defaultStoreConfig = {};
  return new Vuex.Store(mergeWith(defaultStoreConfig, overrides, customizer));
};

export { createWrapper, createStore };
