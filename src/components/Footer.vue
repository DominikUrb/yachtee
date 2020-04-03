<template>
  <v-footer
    padless
    app
  >
    <v-card
      class="flex"
      flat
      tile
    >
      <v-card-title class="secondary">
        <div class="ml-8 d-flex align-center">
          <span class="display-1 primary--text">Yachter</span>
        </div>

        <v-spacer></v-spacer>
        
        <div class="mt-8 mr-8">
          <v-btn
            v-for="icon in icons"
            :key="icon"
            class="mx-4"
            icon
          >
            <v-icon size="36px" color="primary">{{ icon }}</v-icon>
          </v-btn>
        </div>
      </v-card-title>
      
      <v-card-title class="secondary">
        <div class="ml-8 d-flex align-center">
          <v-list class="secondary font-weight-light">
            <v-list-item>
              <span>O nas</span>
            </v-list-item>
            <v-list-item>
              <span>Wynajmij swój jacht</span>
            </v-list-item>
            <v-list-item>
              <span>Regulamin</span>
            </v-list-item>
            <v-list-item>
              <span>Partnerzy</span>
            </v-list-item>
          </v-list>
        </div>

        <v-spacer></v-spacer>
        
        <div class="mr-12 d-flex align-center">
          <v-list class="secondary font-weight-light">
            <v-list-item>
              <span>Kontakt</span>
            </v-list-item>
            <v-list-item>
              <span><v-icon>mdi-email</v-icon> yachter@gmail.com</span>
            </v-list-item>
            <v-list-item>
              <span><v-icon>mdi-phone</v-icon> +48 123 456 789</span>
            </v-list-item>
          </v-list>
        </div>
        
      </v-card-title>
      

      <v-card-text class="py-2 text-center secondary">
        {{ new Date().getFullYear() }} — <strong>Yachter</strong>
      </v-card-text>
    </v-card>
  </v-footer>
</template>

<script>
export default {
  name: "Footer",
  data: () => ({
    icons: [
      'mdi-facebook',
      'mdi-twitter',
      'mdi-google-plus',
      'mdi-linkedin',
      'mdi-instagram',
    ],
  }),
  }
</script>

<style scoped>

</style>
