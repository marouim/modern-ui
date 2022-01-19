<template>
    <v-container>
 
    <v-card
      class="mx-auto"
      max-width="500"
    >

    <v-toolbar
      color="red"
      dark
    >
      <v-toolbar-title>10 Derniers messages</v-toolbar-title>

      <v-spacer></v-spacer>

      <v-dialog
        transition="dialog-bottom-transition"
        max-width="600"
      >
        <template v-slot:activator="{ on, attrs }">
          <v-btn
            icon
            v-bind="attrs"
            v-on="on"
          >
            <v-icon>mdi-plus</v-icon>
          </v-btn>
        </template>
        <template v-slot:default="dialog">
          <v-card>
            <v-toolbar
              color="red"
              dark
            >Envoyer un message</v-toolbar>
            <v-card-text>
              
              <v-textarea v-model=newMessage>
              
              </v-textarea>

            </v-card-text>
            <v-card-actions class="justify-end">
              <v-btn
                text
                @click="sendIntegrationsMessage(newMessage); dialog.value = false"
              >Envoyer</v-btn>
              <v-btn
                text
                @click="dialog.value = false"
              >Annuler</v-btn>
            </v-card-actions>
          </v-card>
        </template>
      </v-dialog>


      

    </v-toolbar>

    <v-list>

      <v-list-item-group
        v-model="selected"
        active-class="red--text"
        multiple
      >

        <template v-for="item in integrationsMessages">
          <v-list-item :key="item.id">
            <template v-slot:default>

          <v-list-item-content>
            <v-list-item-title v-text="item.message"></v-list-item-title>

            <v-list-item-subtitle
              class="text--primary"
              v-text="item.headline"
            ></v-list-item-subtitle>
          </v-list-item-content>
          <v-list-item-action>
                <v-list-item-action-text v-text="item.id"></v-list-item-action-text>
          </v-list-item-action>

            </template>
          </v-list-item>

        </template>


      </v-list-item-group>

    </v-list>

  </v-card>






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

    // this.interval = setInterval(() => {this.getIntegrationsMessages()}, 2000)

  },

  beforeDestroy() {
    // clearInterval(this.interval)
  },

  methods: {
    ...mapActions(["getIntegrationsMessages", "sendIntegrationsMessage"])
  },

  computed: {
    ...mapGetters(["integrationsMessages"])
  }
};
</script>
