const { app, BrowserWindow } = require("electron");

const WINDOW_CONFIG = {
    height: 1080,
    width: 1920,
    fullscreen: true,
    frame: false,
    kiosk: true,
    autoHideMenuBar: true,
    useContentSize: true,
    // webPreferences: {
    //     nodeIntegration: true,
    // },
    resizable: false,
};

const createWindow = () => {
    const win = new BrowserWindow(WINDOW_CONFIG);

    win.loadFile("index.html");
};

app.whenReady().then(() => {
    createWindow();
});

app.on("window-all-closed", () => {
    if (process.platform !== "darwin") app.quit();
});
