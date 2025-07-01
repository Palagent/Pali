
# Palagent Notes

A sleek and modern voice note application that uses Google's Gemini AI to transcribe and polish your dictation into well-structured, readable notes.

### Features
- **One-Click Recording:** Start and stop recording with a single click or a press of the middle mouse button.
- **AI-Powered Transcription:** Converts your speech to text accurately.
- **Gemini-Polished Notes:** Automatically refines raw transcriptions into clear, formatted notes, removing filler words and structuring content.
- **Automatic Clipboard Copy:** The final polished note is instantly copied to your clipboard for easy pasting. Includes a fallback "Copy" button for browser security restrictions.
- **Dual View:** Easily switch between the polished note and the raw, unedited transcription.
- **Modern UI:** A clean, professional interface inspired by Palagent.fi.

---

## Installation and Setup

To run this application locally, you need a web server and a Google Gemini API key.

### 1. Get the Code
Clone this repository to your local machine or download the files.

### 2. Set Up Your API Key
The application requires a Google Gemini API key to function.

1.  **Get a key:** Visit [Google AI Studio](https://aistudio.google.com/app/apikey) to create your API key.
2.  **Create an environment file:** In the root directory of the project, create a file named `.env`.
3.  **Add your key to the file:** Add the following line to your `.env` file, replacing `YOUR_GEMINI_API_KEY` with the key you just created:
    ```
    API_KEY=YOUR_GEMINI_API_KEY
    ```
    **Important:** This setup assumes you are using a development server (like Vite or Parcel) that loads environment variables from a `.env` file and makes them available under `process.env`. If you are running a simple static server, you will need to replace `process.env.API_KEY!` in `index.tsx` directly with your key, but this is not recommended for security reasons.

### 3. Run the Application
You can serve the files using any simple local web server. A common choice is `serve`.

1.  **Install `serve` (if you don't have it):**
    ```bash
    npm install -g serve
    ```
2.  **Start the server:** From the project's root directory, run:
    ```bash
    serve .
    ```
3.  Open your browser and navigate to the local address provided by the server (e.g., `http://localhost:3000`).

---

## How to Use

1.  **Start Recording:** Click the large microphone button or press your middle mouse button. The interface will switch to a live recording view.
2.  **Speak:** Dictate your thoughts, ideas, or meeting notes.
3.  **Stop Recording:** Click the stop button or press the middle mouse button again.
4.  **Wait for the Magic:** The app will display its status as it processes the audio, gets the raw transcription, and sends it to Gemini for polishing.
5.  **Done!** The "Polished" tab will show your final, clean note. The content is automatically copied to your clipboard. If auto-copy fails, a "Copy" button will appear.
6.  **Switch Views:** Click the "Raw" tab to see the original, unedited transcription.
7.  **New Note:** Click the file icon (`<i class="fas fa-file"></i>`) to clear the current note and start fresh.

---
## Käyttö- ja asennusohje (Suomeksi)

### Kuvaus
Moderni äänimuistio-sovellus, joka käyttää Googlen Gemini-tekoälyä sanelemasi puheen litteroimiseen ja viimeistelyyn selkeiksi, jäsennellyiksi muistiinpanoiksi.

### Asennus

Tarvitset paikallisen verkkopalvelimen ja Google Gemini API-avaimen.

1.  **Hae koodi:** Kloonaa tämä repositorio tai lataa tiedostot koneellesi.
2.  **Hanki API-avain:**
    1.  Luo API-avain [Google AI Studiossa](https://aistudio.google.com/app/apikey).
    2.  Luo projektin juurikansioon tiedosto nimeltä `.env`.
    3.  Lisää tiedostoon seuraava rivi ja korvaa `SINUN_GEMINI_API_AVAIN` luomallasi avaimella:
        ```
        API_KEY=SINUN_GEMINI_API_AVAIN
        ```
3.  **Käynnistä sovellus:**
    1.  Asenna `serve`-komento (jos sinulla ei ole sitä): `npm install -g serve`
    2.  Käynnistä palvelin projektin juurihakemistosta komennolla: `serve .`
    3.  Avaa selaimeen palvelimen antama osoite (esim. `http://localhost:3000`).

### Käyttö

1.  **Aloita nauhoitus:** Klikkaa isoa mikrofonipainiketta tai hiiren keskimmäistä näppäintä.
2.  **Puhu:** Sanele muistiinpanosi.
3.  **Lopeta nauhoitus:** Klikkaa stop-painiketta tai hiiren keskimmäistä näppäintä uudelleen.
4.  **Odota:** Sovellus käsittelee äänen, litteroi sen ja viimeistelee tekstin Geminin avulla.
5.  **Valmista!** Viimeistelty muistiinpano ilmestyy "Polished"-välilehdelle ja kopioidaan automaattisesti leikepöydällesi. Jos kopiointi epäonnistuu, näkyviin tulee "Copy"-painike.
