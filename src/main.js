const { app, BrowserWindow, Menu } = require('electron');
const path = require('path');
let mainWindow = null;

// Keep a global reference of the window object, if you don't, the window will
// be closed automatically when the JavaScript object is garbage collected.


function createWindow () {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        title: 'GlslEditor',
        width: 1000,
        minWidth: 700,
        height: 700,
        minHeight: 700,
        webPreferences: {
            nodeIntegration: false,
            contextIsolation: true,
            preload: path.join(__dirname, 'preload.js')
        }
    });
    mainWindow.setTitle('GlslEditor');
    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, '..', 'index.html'));

    // Emitted when the window is closed.
    mainWindow.on('closed', function () {
    // Dereference the window object, usually you would store windows
    // in an array if your app supports multi windows, this is the time
    // when you should delete the corresponding element.
        mainWindow = null;
    });
}

// This method will be called when Electron has finished
// initialization and is ready to create browser windows.
// Some APIs can only be used after this event occurs.
app.on('ready', createWindow);

// Quit when all windows are closed.
app.on('window-all-closed', function () {
    app.quit();
});

app.on('activate', function () {
    // On OS X it's common to re-create a window in the app when the
    // dock icon is clicked and there are no other windows open.
    if (mainWindow === null) {
        createWindow();
    }
});

