const { app, BrowserWindow, screen } = require('electron');

function createWindow() {
    const mainScreen = screen.getPrimaryDisplay();
    const dimensions = mainScreen.size;

    const win = new BrowserWindow({
        width: 262,
        height: 133,
        x: 10,
        y: dimensions.height - 180,
        frame: false,
        alwaysOnTop: true,
        webPreferences: {
            nodeIntegration: true
        }
    });

    win.loadFile('index.html');
}

app.whenReady().then(createWindow);

app.on('window-all-closed', () => {
    if (process.platform !== 'darwin') {
        app.quit();
    }
});

app.on('activate', () => {
    if (BrowserWindow.getAllWindows().length === 0) {
        createWindow();
    }
});
