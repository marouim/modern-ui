<template>
  <v-container>
    <v-data-iterator :items="integrationsMessages" items-per-page.sync="6" hide-default-footer>
      <template v-slot:header>
      </template>

      <template v-slot:default="props">
        <v-row>
          <v-col v-for="item in props.items" :key="item.message">
            <v-card>
              <v-card-title class="subheading font-weight-bold">{{ item.message }}</v-card-title>
            </v-card>
          </v-col>
        </v-row>
      </template>
    </v-data-iterator>

  <v-textarea v-model=newMessage>
  
  </v-textarea>
  <v-btn @click="sendIntegrationsMessage(newMessage)">Envoyer message</v-btn>

  </v-container>
</template>

<script>
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Integrations",

  data: () => ({
      interval: 0,
      newMessage: "test"
  }),

  mounted() {
    this.getIntegrationsMessages();

    this.interval = setInterval(() => {this.getIntegrationsMessages()}, 5000)

  },

  beforeDestroy() {
    clearInterval(this.interval)
  },

  methods: {
    ...mapActions(["getIntegrationsMessages", "sendIntegrationsMessage"])
  },

  computed: {
    ...mapGetters(["integrationsMessages"])
  }
};
</script>
