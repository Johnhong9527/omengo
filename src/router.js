import Vue from 'vue';
import Router from 'vue-router';
import Home from './views/Home.vue';

Vue.use(Router);

export default new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: Home,
    },
    {
      path: '/category',
      name: 'category',
      // route level code-splitting
      // this generates a separate chunk (category.[hash].js) for this route
      // which is lazy-loaded when the route is visited.
      component: () => import(/* webpackChunkName: "category" */ './views/Category.vue'),
    },
    {
      path: '/shopcart',
      name: 'shopcart',
      component: () => import(/* webpackChunkName: "shopcart" */ './views/Shopcart.vue'),
    },
    {
      path: '/Personal',
      name: 'personal',
      component: () => import(/* webpackChunkName: "personal" */ './views/Personal.vue'),
    },
    {
      path: '/SelectStore',
      name: 'selectStore',
      component: () => import(/* webpackChunkName: "personal" */ './views/SelectStore.vue'),
    },
  ],
});
