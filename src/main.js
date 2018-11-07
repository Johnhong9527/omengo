import Vue from 'vue';
import NProgress from './components/progress/nprogress';
// eslint-disable-next-line
import { Row, Col, Loading, Swipe, SwipeItem, Uploader, Icon, Tabbar, TabbarItem } from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import ajax from './plugins/ajax';
import './registerServiceWorker';
import './assets/nprogress.css';

Vue.use(Row).use(Col);
Vue.use(Loading);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Uploader);
Vue.use(Icon);
Vue.use(Tabbar).use(TabbarItem);
Vue.use(ajax);
Vue.config.productionTip = false;

NProgress.configure({ showSpinner: false, trickleSpeed: 200 });
router.beforeEach((to, from, next) => {
  NProgress.start();
  next();
});

router.afterEach(() => {
  NProgress.done();
});
new Vue({
  router,
  store,
  // eslint-disable-next-line
  render: h => h(App),
}).$mount('#app');
