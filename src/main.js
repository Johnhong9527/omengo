import Vue from 'vue';
import {
  Row,
  Col,
  Loading,
  Swipe,
  SwipeItem,
  Uploader,
  Icon,
} from 'vant';
import App from './App.vue';
import router from './router';
import store from './store';
import './registerServiceWorker';

Vue.use(Row).use(Col);
Vue.use(Loading);
Vue.use(Swipe).use(SwipeItem);
Vue.use(Uploader);
Vue.use(Icon);
Vue.config.productionTip = false;

new Vue({
  router,
  store,
  // eslint-disable-next-line
  render: (h) => h(App),
}).$mount('#app');
