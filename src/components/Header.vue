<template>
  <v-app-bar
    app
    hide-on-scroll
  >
    <div class="d-flex align-center">
      <router-link
        to="/"
        class="ml-6 display-1 primary--text"
        style="text-decoration: none"
      >
        Yachter
      </router-link>
    </div>

    <v-spacer></v-spacer>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
      class="px-3"
    >
      <span class="primary--text">O firmie</span>
    </v-btn>

    <v-btn
      href="https://github.com/vuetifyjs/vuetify/releases/latest"
      text
      class="px-3"
    >
      <span class="primary--text">Opinie</span>
    </v-btn>
    
    <v-menu
      min-width="115px"
      offset-y="offset"
    >
      <template v-slot:activator="{ on }">
        <v-btn
          text
          v-on="on"
          class="px-3 mr-2"
        >
          <span class="mr-2 primary--text">Konto</span>
          <v-icon color="primary">mdi-account-circle</v-icon>
        </v-btn>
      </template>
<!--          FIXME: drut do poprawy z tym @click-->
      <v-list dense>
        
        <v-list-item
          v-for="(item, i) in items"
          :key="i"
          @click="counter++"
        >
          <v-list-item-title
            class="primary--text"
            v-if="i===0"
          >
            <v-btn
              small
              color="primary"
              style="width: 100%; height: 40px"
            >
              <router-link
                v-bind:to="item.url"
                class="white--text"
                style="text-decoration: none"
              >
                {{ item.title }}
              </router-link>
            </v-btn>
          </v-list-item-title>
          
          <v-list-item-title
            class="ml-4 primary--text"
            v-else
          >
            {{ item.title }}
          </v-list-item-title>
          
        </v-list-item>
      </v-list>
    </v-menu>
    
  </v-app-bar>
</template>

<script>
    export default {
        name: "Header",
        data: () => ({
          counter: 0,
          items: [
            { title: 'Zaloguj', url: '/login'},
            { title: 'Dodaj jacht' },
          ],
      }),
    }
</script>

<style scoped>

</style>
