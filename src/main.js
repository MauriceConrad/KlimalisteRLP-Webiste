import Vue from 'vue';
import App from './App.vue';
import Meta from 'vue-meta';

Vue.config.productionTip = false;

console.log(Meta);
Vue.use(Meta);

new Vue({
  render: h => h(App),
}).$mount('#app');
