const { app, BrowserWindow } = require("electron");
const path = require("path");

const electron = require("electron");

// Enable live reload for Electron too
require("electron-reload")(__dirname, {
    // Note that the path to electron may vary according to the main file
    electron: require(`${__dirname}/node_modules/electron`)
});

let mainWindow;

function createWindow() {
    mainWindow = new BrowserWindow({
        width: 1280,
        height: 720,
        webPreferences: {
            nodeIntegration: true
        },
        frame: false
    });

    mainWindow.loadFile("index.html");

    mainWindow.on("closed", function() {
        mainWindow = null;
    });
    console.log("Window Created\n");
}

app.on("ready", createWindow);

// Quit when all windows are closed.
app.on("window-all-closed", function() {
    if (process.platform !== "darwin") app.quit();
});

app.on("activate", function() {
    if (mainWindow === null) createWindow();
});
