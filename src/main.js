import Vue from 'vue';
import VueRouter from 'vue-router';
import App from './App.vue';
import Deck from './pages/Deck/index.vue';
import NewDeck from './pages/NewDeck/index.vue';
import store from './store/index.ts';

Vue.use(VueRouter);
Vue.config.productionTip = false;

const routes = [
  { path: '/', component: Deck },
  { path: '/new/:id', component: NewDeck },
];

const router = new VueRouter({
  mode: 'history',
  routes,
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
