import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Product from '../views/Product.vue';

Vue.use(VueRouter);

const routes = [
  {
    path: '/',
    name: 'home',
    component: Home
  },
  {
    path: '/products/:productId',
    name: 'product',
    component: Product
  }
];

const router = new VueRouter({
  routes
});

export default router;
