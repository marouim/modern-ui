import axios from "axios";

const api = {
  baseUrl: "/api",

  getIntegrationsMessages() {
    return axios({
      method: "GET",
      baseURL: this.baseUrl,
      url: "/messages",
    });
  },

  postIntegrationsMessage(message) {
    return axios({
      method: "POST",
      baseURL: this.baseUrl,
      url: "sendmessage",
      data: {
        message: message
      }
    });
  }
};

export default api;
