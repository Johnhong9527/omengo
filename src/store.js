import Vue from 'vue';
import Vuex from 'vuex';
import { Toast } from 'vant';
import http from './plugins/ajax';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datum: {},
    cat: { quantity: '' },
    catRect: {},
  },
  mutations: {
    GETDATUM(state, data) {
      // eslint-disable-next-line
      state.datum = data;
    },
    GETQUANTITY(state, num) {
      // eslint-disable-next-line
      state.cat.quantity = num;
    },
    SETQUANTITY(state, add) {
      if (add === 'add') {
        // eslint-disable-next-line
        state.cat.quantity += 1;
      }
    },
    GETCATRECT(state, info) {
      // eslint-disable-next-line
      state.catRect = info;
    },
  },
  actions: {
    getDatum({ commit }) {
      const storage = window.localStorage;
      const toast = Toast.loading({
        mask: true,
        message: '加载中...',
      });
      http
        .get('/api/index', {
          // eslint-disable-next-line
          storeId: JSON.parse(storage.__H5__store__).id,
        })
        .then(data => {
          toast.clear();
          // eslint-disable-next-line
          commit('GETDATUM', data);
        });
    },
    setQuantity({ commit }) {
      commit('SETQUANTITY', 'add');
    },
    getQuantity({ commit }) {
      const storage = window.localStorage;
      if (storage.getItem('__H5__cart__') === null) {
        commit('GETQUANTITY', 0);
      } else {
        http
          .get('api/cart/sku_quantity', {
            cartKey: storage.getItem('__H5__cart__'),
          })
          .then(res => {
            console.log(res);
            commit('GETQUANTITY', res);
          });
      }
    },
    getCatRect({ commit }, info) {
      commit('GETCATRECT', info);
    },
  },
});
