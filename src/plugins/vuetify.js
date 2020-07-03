import Vue from 'vue'
import Vuetify from 'vuetify/lib'

Vue.use(Vuetify)

import nl from 'vuetify/es5/locale/nl'
import fr from 'vuetify/es5/locale/fr'
import en from 'vuetify/es5/locale/en'

Vue.component('my-component', {
    methods: {
        changeLocale() {
            this.$vuetify.lang.current
        },
    },
})

export default new Vuetify({
    lang: {
        locales: { nl, en, fr },
        current: "fr",
    },
})