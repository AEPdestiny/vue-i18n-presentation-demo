import { createApp } from 'vue'
import { createI18n } from 'vue-i18n'
import App from './App.vue'
import './style.css'

const messages = {
  de: {
    app: {
      title: 'Produktkatalog',
      subtitle: 'Eine kleine Vue-I18n-Demo mit Umschalten der Sprache, Parametern und Formaten.',
      language: 'Sprache',
      stock: 'Keine Artikel auf Lager | Ein Artikel auf Lager | {count} Artikel auf Lager',
      price: 'Preis',
      delivery: 'Liefertermin',
      greeting: 'Hallo {name}, willkommen zur Live-Demo.',
      checkout: 'Zur Kasse'
    }
  },
  en: {
    app: {
      title: 'Product catalog',
      subtitle: 'A small Vue I18n demo with locale switching, parameters and formats.',
      language: 'Language',
      stock: 'No items in stock | One item in stock | {count} items in stock',
      price: 'Price',
      delivery: 'Delivery date',
      greeting: 'Hello {name}, welcome to the live demo.',
      checkout: 'Checkout'
    }
  }
}

const numberFormats = {
  de: {
    currency: { style: 'currency', currency: 'EUR' }
  },
  en: {
    currency: { style: 'currency', currency: 'USD' }
  }
}

const datetimeFormats = {
  de: {
    short: { year: 'numeric', month: '2-digit', day: '2-digit' }
  },
  en: {
    short: { year: 'numeric', month: 'short', day: 'numeric' }
  }
}

const i18n = createI18n({
  legacy: false,
  locale: 'de',
  fallbackLocale: 'en',
  messages,
  numberFormats,
  datetimeFormats
})

createApp(App).use(i18n).mount('#app')
