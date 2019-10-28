import Vue from 'vue'
import Vuex from 'vuex'
import app from './app'
Vue.use(Vuex)

export default new Vuex.Store({
  modules: {
    app
  }
  // state: {
  //   count: 1
  // },
  // mutations: {
  //   increment(state) {
  //     state.count++;
  //   },
  //   decrement(state) {
  //     state.count--;
  //   }
  // },
  // actions: {
  //   myIncrement(context, state) {
  //     context.commit('increment');
  //   },
  //   myDecrement(context, state) {
  //     context.commit('decrement');
  //   }
  // }
})