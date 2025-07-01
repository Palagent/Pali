# Palagent Notes - Desktop Application

Palagent Notes on työpöytäsovellus äänentunnistukseen ja muistiinpanojen tekemiseen, joka käyttää Google Gemini AI:ta tekstin parantamiseen.

## Asennusohjeet

### 1. Kloonaa projekti

```bash
git clone <repository-url>
cd Pali
```

### 2. Asenna riippuvuudet

```bash
npm install
```

### 3. Määritä API-avain

Luo `.env`-tiedosto projektin juureen ja lisää Gemini API-avaimesi:

```
API_KEY=your_gemini_api_key_here
```

Voit hankkia API-avaimen osoitteesta: https://makersuite.google.com/app/apikey

## Käyttöohjeet

### Kehitysversio

Käynnistä sovellus kehitystilassa:

```bash
npm run electron
```

### Tuotantoversio

Rakenna ja käynnistä tuotantoversio:

```bash
npm run build
npm run dist
```

Tämä luo `dist-electron`-kansion, jossa on asennettava paketti käyttöjärjestelmällesi.

## Ominaisuudet

- **Äänentunnistus**: Tallenna ääntä ja muunna se tekstiksi
- **AI-parannus**: Gemini AI parantaa raakaa tekstiä luettavammaksi
- **Työpöytäsovellus**: Toimii itsenäisenä sovelluksena ilman selainta
- **Muistiinpanojen hallinta**: Tallenna ja hallitse muistiinpanoja
- **Kaunis käyttöliittymä**: Moderni ja helppokäyttöinen design

## Kehittäjille

### Projektirakenteen

- `electron.js` - Electronin pääprosessi
- `index.tsx` - Sovelluksen päätoiminnallisuus
- `index.html` - HTML-pohja
- `index.css` - Tyylimäärittelyt
- `vite.config.ts` - Vite-konfiguraatio

### Skriptit

- `npm run dev` - Käynnistä Vite dev-serveri
- `npm run build` - Rakenna tuotantoversio
- `npm run electron` - Käynnistä Electron kehitystilassa
- `npm run electron-dev` - Käynnistä Electron ja Vite samanaikaisesti
- `npm run dist` - Luo asennettava paketti

## Ongelmanratkaisu

### API-avain puuttuu

Jos sovellus pyytää API-avainta, varmista että:

1. `.env`-tiedosto on luotu oikein
2. `API_KEY` on määritelty tiedostossa
3. Käynnistä sovellus uudelleen

### Mikrofonin käyttöoikeudet

Ensimmäisellä käynnistyskerralla sovellus pyytää luvan mikrofonin käyttöön. Anna lupa, jotta äänentunnistus toimii.

## Muokkaaminen ja personointi

### Värien muuttaminen

Kaikki värit on määritelty `index.css`-tiedoston `:root`-osiossa. Voit helposti vaihtaa teemaa:

1. Avaa `index.css`-tiedosto
2. Muokkaa `:root`-osion CSS-muuttujia:

```css
:root {
  --color-bg: #0d0d0d; /* Taustaväri */
  --color-accent: #f47927; /* Korostusväri (oranssi) */
  --color-recording: #f47927; /* Tallennusväri */
  --color-text: #f2f2f2; /* Tekstin väri */
  /* ... muut värit ... */
}
```

Katso `themes-examples.css`-tiedostosta valmiita teemaesimerkkejä (vihreä, sininen, violetti).

### Pikanäppäimien muuttaminen

Globaalit pikanäppäimet toimivat sovelluksen ollessa taustalla. Muokkaa `shortcuts-config.js`-tiedostoa:

```javascript
const shortcuts = {
  toggleRecording: [
    "CommandOrControl+G", // Ctrl+G
    "F6", // F6-näppäin
    "CommandOrControl+R", // Lisää haluamasi näppäimet
  ],
  newNote: ["CommandOrControl+Shift+N"],
  toggleWindow: [
    "CommandOrControl+Shift+P", // Piilota/näytä sovellus
  ],
};
```

**Tuetut näppäinyhdistelmät:**

- `CommandOrControl` = Ctrl (Windows/Linux) tai Cmd (Mac)
- `Shift`, `Alt`, `Meta`
- Funktionäppäimet: `F1-F24`
- Kirjaimet: `A-Z`
- Numerot: `0-9`

**Esimerkki pelinäppäimistölle:**
Jos haluat käyttää erikoisnäppäimiä kuten G6, lisää ne listaan:

```javascript
toggleRecording: [
  "CommandOrControl+G6", // Jos tuettu
  "F6", // Vaihtoehto
];
```
