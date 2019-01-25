import Vue from 'vue'
import './plugins/vuetify'
import App from './App.vue'
import router from './router'
import store from './store'
import socket from './plugins/socketIO'

Vue.config.productionTip = false;

new Vue({
    router,
    store,
    socket,
    render: h => h(App)
}).$mount('#app');
