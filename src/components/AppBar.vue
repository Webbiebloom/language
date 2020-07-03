<template>
  <v-app-bar app color="primary" dark>
    <v-btn text>
      <router-link class="white--text" :to="`/${$i18n.locale}`">{{ $t('nav.home')}}</router-link>
    </v-btn>|
    <v-btn text>
      <router-link class="white--text" :to="`/${$i18n.locale}/about`">{{ $t('nav.about')}}</router-link>
    </v-btn>
    <v-spacer></v-spacer>
    <lang-dropdown />
  </v-app-bar>
</template>

<script>
import LangDropdown from "../components/LangDropdown";
export default {
  name: "Home",
  components: {
    LangDropdown
  }
};
</script>
