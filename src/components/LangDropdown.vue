<template>
  <v-row class="lang_select">
    <p id="flag-gb" v-if="$i18n.locale === 'en' " class="pr-3">
      <country-flag country="gb" />
    </p>
    <p id="flag-fr" v-if="$i18n.locale === 'fr' " class="pr-3">
      <country-flag country="fr" />
    </p>
    <p id="flag-be" v-if="$i18n.locale === 'nl' " class="pr-3">
      <country-flag country="be" />
    </p>
    <v-select
      :items="languageArray"
      v-model="lang"
      style="max-width: 60px; text-transform: uppercase"
    >{{ lang }}</v-select>
  </v-row>
</template>
<script>
import { languages } from "../i18n";
export default {
  name: "langDropdown",
  data() {
    return {
      languageArray: languages
    };
  },
  computed: {
    lang: {
      get: function() {
        return this.$store.state.locale;
      },
      set: function(newVal) {
        this.$store.dispatch("changeLocale", newVal);
      }
    }
  }
};
</script>

<style lang="sass">
.row.lang_select
  margin: 20px 0 0 0
  justify-content: flex-end

.v-list-item__title
  text-transform: uppercase
</style>