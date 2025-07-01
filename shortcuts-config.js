// Electron Global Shortcuts Configuration
// Muokkaa näitä pikanäppäimiä tarpeidesi mukaan

const shortcuts = {
  // Tallennuksen aloitus/lopetus
  toggleRecording: [
    'CommandOrControl+G',  // Ctrl+G (Windows/Linux) tai Cmd+G (Mac)
    'F6',                  // F6-näppäin
    // 'CommandOrControl+R', // Lisää tarvittaessa
  ],

  // Uusi muistiinpano
  newNote: [
    'CommandOrControl+Shift+N',
    // 'F7', // Lisää tarvittaessa
  ],

  // Sovelluksen näyttäminen/piilottaminen
  toggleWindow: [
    'CommandOrControl+Shift+P',
  ]
};

// Peliohjain-näppäimet (jos tuettu)
const gamepadButtons = {
  // Xbox/PS4 ohjain
  toggleRecording: 'G6', // G6-nappi
  newNote: 'G7',         // G7-nappi
};

module.exports = { shortcuts, gamepadButtons };
