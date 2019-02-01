

// Vue.use(Vuex);
//
// export default new Vuex.Store({
//   strict: process.env.NODE_ENV !== 'production',
//
//   state: {
//
//   },
//   mutations: {
//
//   },
//   actions: {
//
//   }
// })

import Vue from 'vue';
import Vuex from 'vuex';
// import chatModule from './modules/chat/index';
// import productsModule from './modules/products/index';

Vue.use(Vuex);

export default new Vuex.Store({
  strict: process.env.NODE_ENV !== 'production',
  modules: {
    // chat: chatModule,
    // products: productsModule,
  },
});