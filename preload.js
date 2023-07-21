const { contextBridge } = require('electron')
const path = require('path');
const fs = require('fs')
const os = require('os');
const documentPath = os.homedir();

const configFile = path.join(documentPath, 'Documents','config', 'config.json');
const configData = JSON.parse(fs.readFileSync(configFile, 'utf8'));
const VirtualKeyboard = require('electron-virtual-keyboard');

contextBridge.exposeInMainWorld('setting', {
  code: () => configData.code,
  audio_success: () => configData.audio_success,
  audio_error: () => configData.audio_error,
  vkd: () => VirtualKeyboard
})

