import Vue from 'vue';
import App from './App.vue';
import router from './router';
import store from './store';
import dataV from '@jiaminghi/data-view';
Vue.use(dataV);

// 按需引入vue-awesome图标
import Icon from 'vue-awesome/components/Icon';
import 'vue-awesome/icons/chart-bar.js';
import 'vue-awesome/icons/chart-area.js';
import 'vue-awesome/icons/chart-pie.js';
import 'vue-awesome/icons/chart-line.js';
import 'vue-awesome/icons/align-left.js';

// 全局注册图标
Vue.component('icon', Icon);

// 适配flex
import '@/common/flexible.js';

// 引入全局css
import './assets/scss/style.scss';


// import axios from 'axios'

// Vue.prototype.$http = axios.create({
//   timeout: 30000,
//   baseURL: 'http://127.0.0.1:8091'
// })


//引入echart
import echarts from 'echarts'
Vue.prototype.$echarts = echarts

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');

