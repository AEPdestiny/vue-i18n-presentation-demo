<script setup>
import { computed } from 'vue'
import { useI18n } from 'vue-i18n'

const { t, n, d, locale, availableLocales } = useI18n()

const product = {
  name: 'Noise-Cancelling Headphones',
  price: 129.99,
  deliveryDate: new Date('2026-05-15'),
  stock: 3
}

const localeLabels = {
  de: 'Deutsch',
  en: 'English'
}

const activeLanguage = computed({
  get: () => locale.value,
  set: value => {
    locale.value = value
    document.documentElement.lang = value
  }
})
</script>

<template>
  <main class="shell">
    <section class="toolbar">
      <div>
        <p class="eyebrow">Vue I18n</p>
        <h1>{{ t('app.title') }}</h1>
      </div>

      <label>
        <span>{{ t('app.language') }}</span>
        <select v-model="activeLanguage">
          <option v-for="item in availableLocales" :key="item" :value="item">
            {{ localeLabels[item] }}
          </option>
        </select>
      </label>
    </section>

    <p class="subtitle">{{ t('app.subtitle') }}</p>

    <article class="product">
      <div class="product-media">i18n</div>
      <div class="product-content">
        <h2>{{ product.name }}</h2>
        <p>{{ t('app.greeting', { name: 'Kommilitonen' }) }}</p>
        <dl>
          <div>
            <dt>{{ t('app.stock', product.stock, { count: product.stock }) }}</dt>
            <dd>{{ t('app.delivery') }}: {{ d(product.deliveryDate, 'short') }}</dd>
          </div>
          <div>
            <dt>{{ t('app.price') }}</dt>
            <dd>{{ n(product.price, 'currency') }}</dd>
          </div>
        </dl>
        <button type="button">{{ t('app.checkout') }}</button>
      </div>
    </article>
  </main>
</template>
