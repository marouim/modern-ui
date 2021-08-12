import Vue from "vue";
import Vuex from "vuex";
import integrationsApi from "./api/integrationsApi";

Vue.use(Vuex);

const READ_INTEGRATIONS_MESSAGES_SUCCESSFUL = "READ_INTEGRATIONS_MESSAGES_SUCCESSFUL";
const POST_INTEGRATIONS_MESSAGES_SUCCESSFUL = "POST_INTEGRATIONS_MESSAGES_SUCCESSFUL";

const state = {
  integrationsMessages: []
};

const mutations = {
  [READ_INTEGRATIONS_MESSAGES_SUCCESSFUL](state, data) {
    state.integrationsMessages = data;
  },

  [POST_INTEGRATIONS_MESSAGES_SUCCESSFUL]() {
  }
};

const actions = {
  getIntegrationsMessages({ commit }) {
    integrationsApi.getIntegrationsMessages().then((response) => {
      commit(READ_INTEGRATIONS_MESSAGES_SUCCESSFUL, response.data);
    });
  },

  sendIntegrationsMessage({ commit }, message) {
    integrationsApi.postIntegrationsMessage(message).then(() => {
      commit(POST_INTEGRATIONS_MESSAGES_SUCCESSFUL);
    })
  }

};

const getters = {
  integrationsMessages() {
    return state.integrationsMessages;
  }

};

export default new Vuex.Store({
  state,
  mutations,
  actions,
  getters,
});
