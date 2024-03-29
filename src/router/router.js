import Vue from 'vue';
import Router from 'vue-router';

Vue.use(Router);

const RouterVue = new Router({
  mode: 'history',
  base: process.env.BASE_URL,
  routes: [
    {
      path: '/',
      name: 'home',
      component: () => import(/* webpackChunkName: "home" */'@/views/HomeView')
    },
    {
      path: '/okulista',
      name: 'okulista',
      component: () => import(/* webpackChunkName: "oculist" */'@/views/OculistView')
    },
    {
      path: '/diabetolog',
      name: 'diabetolog',
      component: () => import(/* webpackChunkName: "diabetologist" */'@/views/DiabetologistView')
    },
    {
      path: '/cennik',
      name: 'cennik',
      component: () => import(/* webpackChunkName: "priceList" */'@/views/PriceListView')
    },
    {
      path: '/kontakt',
      name: 'kontakt',
      component: () => import(/* webpackChunkName: "contact" */'@/views/ContactView')
    }
  ],
  scrollBehavior() {
    return { x: 0, y: 0 };
  },
});

export default RouterVue;