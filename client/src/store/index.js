import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: {},
    users: [],
    isStart: false
  },
  mutations: {
    getQuestion(state, payload) {
      state.question = payload;
    },
    getPlayers(state, payload) {
      state.players = payload;
    },
    start(state, payload) {
      state.isStart = payload;
    },
    users(state, payload) {
      state.users = payload
    }
  },
  actions: {
    SOCKET_sendQuestion(context, payload) {
      context.commit('getQuestion', payload);
      console.log(payload);
    },
    SOCKET_start(context, paload) {
      context.commit('start', paload);
    },
    SOCKET_users(context, payload) {
      context.commit('users', payload);
    }
  }
})
