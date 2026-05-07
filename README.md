# Vue I18n Präsentationsdemo

Kleine Demo für eine Präsentation über Vue I18n. Sie zeigt:

- Umschalten zwischen Deutsch und Englisch
- `useI18n()` mit der Vue Composition API
- Parameter in Übersetzungen
- Pluralisierung
- lokalisierte Zahlen- und Datumsformate
- `fallbackLocale`

## Starten

```bash
npm install
npm run dev
```

Danach die lokale Vite-Adresse öffnen, zum Beispiel `http://127.0.0.1:5173`.

## Live-Demo Ablauf

1. App auf Deutsch öffnen und kurz erklären, dass alle Texte über Message-Keys kommen.
2. Sprache auf Englisch umschalten.
3. Im Code `stock` von `3` auf `1` oder `0` ändern und Pluralisierung zeigen.
4. `price` und `deliveryDate` zeigen, um Zahl- und Datumsformatierung zu erklären.
5. `fallbackLocale: 'en'` erwähnen: fehlende deutsche Keys können auf Englisch zurückfallen.

## Repository-Link für die Abgabe

Nach dem Hochladen zu GitHub oder GitLab hier den Link eintragen:

`https://github.com/AEPdestiny/vue-i18n-presentation-demo`
