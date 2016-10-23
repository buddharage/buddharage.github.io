import Vue from 'vue'
import app from './app.vue'
import VueRouter from 'vue-router'

Vue.config.debug = process.env.NODE_ENV !== 'production'

Vue.use(VueRouter)

const router = new VueRouter({
  routes: [
    {path: '/', component: app}
  ]
});

const mainApp = new Vue({router}).$mount('#main-app');
