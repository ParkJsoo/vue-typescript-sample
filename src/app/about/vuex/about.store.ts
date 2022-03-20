import {Module} from 'vuex';

interface AboutState {
  count: number;
}

const aboutStore: Module<AboutState, any> = {
  namespaced: true,
  state     : {
    count: 0
  },
  getters   : {
    getCount(state) {
      return state.count.toString();
    }
  },
  mutations : {
    increment(state) {
      state.count++;
    }
  },
  actions   : {
    increment({commit}) {
      commit('increment');
    }
  },
};

export default aboutStore;
