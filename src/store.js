import Vue from 'vue';
import Vuex from 'vuex';
import http from './plugins/ajax';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    datum: {},
  },
  mutations: {
    getDatum(state, id) {
      http
        .get('http://www.sonyo.com/api/index?', {
          storeId: id,
        })
        .then(data => {
          // eslint-disable-next-line
          state.datum = Object.assign({}, data.datum);
        });
    },
  },
  actions: {},
});
