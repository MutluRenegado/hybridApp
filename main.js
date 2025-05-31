const { app, BrowserWindow, ipcMain } = require('electron');
const path = require('path');
const { spawn } = require('child_process');

function createWindow() {
  const win = new BrowserWindow({
    width: 1280,
    height: 800,
    webPreferences: {
      preload: path.join(__dirname, 'preload.js'),
    },
  });

  win.loadFile('index.html');
}

ipcMain.handle('load-page', async (event, pageName) => {
  return new Promise((resolve) => {
    const py = spawn('python', ['render_page.py', pageName]);
    let data = '';
    py.stdout.on('data', chunk => data += chunk);
    py.on('close', () => resolve(data));
  });
});

app.whenReady().then(createWindow);
