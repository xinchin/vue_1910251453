const app = {
  state: {
    count: 1
  },
  mutations: {
    increment(state) {
      state.count++;
    },
    decrement(state) {
      state.count--;
    }
  },
  actions: {
    myIncrement(context, state) {
      context.commit('increment');
    },
    myDecrement(context, state) {
      context.commit('decrement');
    }
  }
}
export default app;