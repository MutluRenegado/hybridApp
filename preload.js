const { contextBridge, ipcRenderer } = require('electron');

contextBridge.exposeInMainWorld('api', {
  loadPage: (page) => ipcRenderer.invoke('load-page', page)
});

