<template>
  <v-app-bar app>

    <div class="d-flex align-center">
      <span class="mr-2 display-1 primary--text">Yachter</span>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
    >
      <span class="mr-2 primary--text">O firmie</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
    >
      <span class="mr-2 primary--text">Opinie</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
    >
      <span class="mr-2 primary--text">Konto</span>
      <v-icon>mdi-account-circle</v-icon>
    </v-btn>

  </v-app-bar>
</template>

<script>
    export default {
        name: "Header"
    }
</script>

<style scoped>

</style>
