<template>
  <v-app>
    <v-content app>
      <Header></Header>
    </v-content>
    
    <v-content app style="height: 100%">
      <router-view></router-view>
    </v-content>
    
    <v-content app>
      <Footer></Footer>
    </v-content>
  </v-app>
</template>

<script>
import Header from "./components/Header";
import Footer from "./components/Footer";

export default {
  name: 'App',

  components: {
    Header,
    Footer,
  },

  data: () => ({
    //
  }),
};
</script>
