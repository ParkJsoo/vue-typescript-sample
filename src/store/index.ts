import Vue  from 'vue';
import Vuex from 'vuex';

import aboutStore from '@/app/about/vuex/about.store';

Vue.use(Vuex);

export default new Vuex.Store({
  modules: {
    aboutStore
  }
});
