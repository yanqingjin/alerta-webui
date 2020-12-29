import Vue from 'vue'
import VueI18n from 'vue-i18n'

// import file language from @/locales
import { en } from '@/locales/en'
import { de } from '@/locales/de'
import { fr } from '@/locales/fr'

Vue.use(VueI18n)

const loadLocaleMessages = {
  en,
  de,
  fr
}

// variable navigator language
let language = (navigator.languages && navigator.languages[0]) || navigator.language

if (language.length > 2) {
  language = language.split('-')[0]
  language = language.split('_')[0]
}

// variable i18n for translation
const i18n = new VueI18n({
  locale: loadLocaleMessages[language] ? language : 'en',
  fallbackLocale: 'en', // set fallback locale
  messages: loadLocaleMessages
})

export default i18n