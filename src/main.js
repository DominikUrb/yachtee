import Vue from 'vue'
import VueRouter from 'vue-router'
import VueSession from "vue-session/index.esm";
import vuetify from './plugins/vuetify'

import App from './App.vue'
import {routes } from "./routes";


Vue.config.productionTip = false;

Vue.use(VueRouter);
Vue.use(VueSession);

const router = new VueRouter({
  mode: 'history',
  routes
});

new Vue({
  el: '#app',
  router,
  vuetify,
  render: h => h(App)
}).$mount('#app');
