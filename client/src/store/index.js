import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: {
    question: {},
    players: [],
  },
  mutations: {
    getQuestion(state, payload) {
      state.question = payload;
    },
    getPlayers(state, payload) {
      state.players = payload;
    }
  },
  actions: {
    SOCKET_question(context, payload) {
      context.commit('getQuestion', payload);
    },
    SOCKET_players(context, payload) {
      context.commit('getPlayers', payload);
    }
  }
})
