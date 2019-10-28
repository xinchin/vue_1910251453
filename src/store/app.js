import { INCREMENT, DECREMENT } from '../store/mutation-types'

const app = {
  state: {
    count: 1
  },
  mutations: {
    [INCREMENT](state) {
      state.count++;
    },
    [DECREMENT](state) {
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