import Vue from 'vue';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import 'material-icons/iconfont/material-icons.css';

import App from './App.vue';
import mixins from './mixins';
import router from './router';
import store from './store';

Vue.use(Vuesax);
Vue.mixin(mixins.utils);

Vue.config.productionTip = false;

new Vue({
  router,
  store,
  render: h => h(App),
}).$mount('#app');
