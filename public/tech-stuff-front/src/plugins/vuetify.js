import Vue from 'vue';
import Vuetify from 'vuetify/lib';

Vue.use(Vuetify);

export default new Vuetify({
  icons: {
    iconfont: 'mdi'
  },
  theme: {
    themes: {
      light: {
        primary: '#673ab7',
        secondary: '#ff5722',
        accent: '#607d8b',
        error: '#f44336',
        warning: '#ffc107',
        info: '#00bcd4',
        success: '#4caf50'
      }
    }
  }
});
