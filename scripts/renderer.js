const remote = require('electron').remote;

document.getElementById('minimize-btn').addEventListener('click', () => {
    remote.getCurrentWindow().minimize();
})

document.getElementById('maximize-btn').addEventListener('click', () => {
    const currentWindow = remote.getCurrentWindow();
    if (currentWindow.isMaximized()){
        currentWindow.unmaximize();
    }
    else{
        currentWindow.maximize();
    }
})

document.getElementById('close-btn').addEventListener('click', () => {
    remote.app.quit();
})