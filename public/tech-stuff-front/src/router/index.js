import Vue from 'vue';
import VueRouter from 'vue-router';

import Home from '../views/Home.vue';
import Product from '../views/Product.vue';
import Register from '../views/Register.vue';
import Login from '../views/Login.vue';

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
  },
  {
    path: '/register',
    name: 'register',
    component: Register
  },
  {
    path: '/login',
    name: 'login',
    component: Login
  }
];

const router = new VueRouter({
  routes
});

export default router;
