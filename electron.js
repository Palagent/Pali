const { app, BrowserWindow, Menu, globalShortcut } = require('electron');
const path = require('path');
const { spawn } = require('child_process');
const { shortcuts } = require('./shortcuts-config');

let mainWindow;
let viteProcess;

function createWindow() {
  // Create the browser window
  mainWindow = new BrowserWindow({
    width: 1200,
    height: 800,
    webPreferences: {
      nodeIntegration: false,
      contextIsolation: true,
      enableRemoteModule: false,
      webSecurity: false // Needed for local file access in development
    },
    icon: path.join(__dirname, 'palagent.png'),
    show: false, // Don't show until ready
    titleBarStyle: 'default'
  });

  // Create application menu
  const template = [
    {
      label: 'File',
      submenu: [
        {
          label: 'New Note',
          accelerator: 'CmdOrCtrl+N',
          click: () => {
            mainWindow.webContents.executeJavaScript(`
              if (window.voiceNotesApp && window.voiceNotesApp.handleNewNote) {
                window.voiceNotesApp.handleNewNote();
              }
            `);
          }
        },
        { type: 'separator' },
        {
          role: 'quit'
        }
      ]
    },
    {
      label: 'Edit',
      submenu: [
        { role: 'undo' },
        { role: 'redo' },
        { type: 'separator' },
        { role: 'cut' },
        { role: 'copy' },
        { role: 'paste' },
        { role: 'selectall' }
      ]
    },
    {
      label: 'View',
      submenu: [
        { role: 'reload' },
        { role: 'forceReload' },
        { role: 'toggleDevTools' },
        { type: 'separator' },
        { role: 'resetZoom' },
        { role: 'zoomIn' },
        { role: 'zoomOut' },
        { type: 'separator' },
        { role: 'togglefullscreen' }
      ]
    },
    {
      label: 'Window',
      submenu: [
        { role: 'minimize' },
        { role: 'close' }
      ]
    }
  ];

  const menu = Menu.buildFromTemplate(template);
  Menu.setApplicationMenu(menu);

  // In development, start Vite dev server
  if (process.env.NODE_ENV === 'development') {
    startViteDevServer();
  } else {
    // In production, load the built files
    mainWindow.loadFile('dist/index.html');
  }

  // Show window when ready
  mainWindow.once('ready-to-show', () => {
    mainWindow.show();
  });

  // Handle window closed
  mainWindow.on('closed', () => {
    mainWindow = null;
    if (viteProcess) {
      viteProcess.kill();
    }
  });
}

function startViteDevServer() {
  // Start Vite dev server
  viteProcess = spawn('npm', ['run', 'dev'], {
    cwd: __dirname,
    stdio: 'inherit'
  });

  // Wait a bit for Vite to start, then load the page
  setTimeout(() => {
    mainWindow.loadURL('http://localhost:5173');
  }, 3000);

  viteProcess.on('error', (err) => {
    console.error('Failed to start Vite dev server:', err);
  });
}

// This method will be called when Electron has finished initialization
app.whenReady().then(() => {
  createWindow();
  
  // Register global shortcuts
  registerGlobalShortcuts();
});

function registerGlobalShortcuts() {
  console.log('Registering global shortcuts...');
  
  // Register recording toggle shortcuts
  shortcuts.toggleRecording.forEach(shortcut => {
    try {
      globalShortcut.register(shortcut, () => {
        if (mainWindow) {
          console.log(`Recording toggle triggered with: ${shortcut}`);
          mainWindow.webContents.executeJavaScript(`
            if (window.voiceNotesApp && window.voiceNotesApp.toggleRecording) {
              window.voiceNotesApp.toggleRecording();
            }
          `);
        }
      });
      console.log(`✓ Registered: ${shortcut} for recording toggle`);
    } catch (error) {
      console.log(`✗ Failed to register: ${shortcut} - ${error.message}`);
    }
  });

  // Register new note shortcuts
  shortcuts.newNote.forEach(shortcut => {
    try {
      globalShortcut.register(shortcut, () => {
        if (mainWindow) {
          console.log(`New note triggered with: ${shortcut}`);
          mainWindow.webContents.executeJavaScript(`
            if (window.voiceNotesApp && window.voiceNotesApp.handleNewNote) {
              window.voiceNotesApp.handleNewNote();
            }
          `);
        }
      });
      console.log(`✓ Registered: ${shortcut} for new note`);
    } catch (error) {
      console.log(`✗ Failed to register: ${shortcut} - ${error.message}`);
    }
  });

  // Register window toggle shortcuts
  shortcuts.toggleWindow.forEach(shortcut => {
    try {
      globalShortcut.register(shortcut, () => {
        if (mainWindow) {
          if (mainWindow.isVisible()) {
            mainWindow.hide();
          } else {
            mainWindow.show();
            mainWindow.focus();
          }
        }
      });
      console.log(`✓ Registered: ${shortcut} for window toggle`);
    } catch (error) {
      console.log(`✗ Failed to register: ${shortcut} - ${error.message}`);
    }
  });
}

// Quit when all windows are closed
app.on('window-all-closed', () => {
  // Unregister all global shortcuts
  globalShortcut.unregisterAll();
  
  if (process.platform !== 'darwin') {
    app.quit();
  }
});

app.on('activate', () => {
  if (BrowserWindow.getAllWindows().length === 0) {
    createWindow();
  }
});

// Kill Vite process when app is quitting
app.on('before-quit', () => {
  // Unregister global shortcuts
  globalShortcut.unregisterAll();
  
  if (viteProcess) {
    viteProcess.kill();
  }
});
