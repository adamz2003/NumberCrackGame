/* Mac os
const { app, BrowserWindow, Menu } = require('electron')
const fs = require('fs');
const path = require('path');

const configFilePath = path.join(__dirname, 'config.json');

fs.readFile(configFilePath, 'utf8', (err, data) => {
  if (err) {
    console.error(err);
    return;
  }
  
  const config = JSON.parse(data);
  
  window.config = config;
});

const createWindow = () => {
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    width: 800,
    height: 600
  })

  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()

  app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
      createWindow()
    }
  })
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') {
    app.quit()
  }
}) */


const { app, BrowserWindow, Menu } = require('electron')
const VirtualKeyboard = require('electron-virtual-keyboard');
const fs = require('fs');
const path = require('path');


// Get the path to the application bundle

let vkb;
const createWindow = () => {
  Menu.setApplicationMenu(null);

  const win = new BrowserWindow({
    width: 1024,
    height: 768,
    webPreferences: {
      nodeIntegration: true,
      preload: path.join(__dirname, 'preload.js'),
      // contextIsolation: false,
    }
  })

  vkb = new VirtualKeyboard(win.webContents);
  win.loadFile('index.html')
}

app.whenReady().then(() => {
  createWindow()
})

app.on('window-all-closed', () => {
  if (process.platform !== 'darwin') app.quit()
})