<template>
  <v-app>
    <AppBar />
    <v-main>
      <router-view />
    </v-main>
  </v-app>
</template>

<script>
import { mapState } from "vuex";
import AppBar from "./components/AppBar";

export default {
  name: "app",

  components: {
    AppBar
  },

  computed: mapState(["locale"]),

  watch: {
    locale() {
      this.$router.replace({ params: { lang: this.locale } }).catch(() => {});
    }
  },
  created() {
    this.$store.dispatch("changeLocale", this.$store.state.locale);
  }
};
</script>
