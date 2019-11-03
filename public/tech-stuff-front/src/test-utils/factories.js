import { mount, createLocalVue } from '@vue/test-utils';
import mergeWith from 'lodash.mergewith';
import Vuetify from 'vuetify';
import Vuex from 'vuex';

const localVue = createLocalVue();
localVue.use(Vuex);

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

/**
 * create component wrapper
 * @param {*} Component
 * @param {Object} overrides
 */
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

/**
 * create Vuex store
 * @param {Object} overrides
 */
const createStore = overrides => {
  const defaultStoreConfig = {};
  return new Vuex.Store(mergeWith(defaultStoreConfig, overrides, customizer));
};

export { createWrapper, createStore };
