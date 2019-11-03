import Vue from 'vue';
import Vuex from 'vuex';
import Categories from './Categories';
import Products from './Products';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Categories,
    Products
  }
});
