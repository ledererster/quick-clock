const { app, BrowserWindow } = require('electron');
const path = require('path');

const iconPath = path.join(__dirname, 'assets', 'clock.png');

function createWindow() {
  const win = new BrowserWindow({
    width: 600,
    height: 400,
    icon: iconPath,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
      nodeIntegration: true,
      contextIsolation: false,
    }
  });

  win.loadFile('index.html');
}

app.whenReady().then(createWindow);
