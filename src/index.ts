import { app, BrowserWindow, ipcMain } from 'electron';
import {
    startSLP
} from './services/slippi';
import * as path from 'path';

let mainWindow: BrowserWindow;

const createWindow = () => {
    // Create the browser window.
    mainWindow = new BrowserWindow({
        height: 800,
        width: 1100,
        show: false
    });

    // and load the index.html of the app.
    mainWindow.loadFile(path.join(__dirname, './html/index.html'));

    mainWindow.show()
};

app.on('ready', () => {
    createWindow();
    startSLP();
});

ipcMain.on('osNotification', (event) => {

});