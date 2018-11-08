import Vue from 'vue';
import Vuex from 'vuex';
import http from './plugins/ajax';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datum: {},
  },
  mutations: {
    GETDATUM(state, data) {
      // eslint-disable-next-line
      state.datum = data;
    },
  },
  actions: {
    getDatum({ commit }) {
      const storage = window.localStorage;
      http
        .get('http://www.sonyo.com/api/index?', {
          // eslint-disable-next-line
          storeId: JSON.parse(storage.__H5__store__).id,
        })
        .then((data) => {
          // eslint-disable-next-line
          commit('GETDATUM', data.datum);
        });
    },
  },
});
