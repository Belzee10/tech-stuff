import Vue from 'vue';
import Vuex from 'vuex';
import Categories from './Categories';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    Categories
  }
});
