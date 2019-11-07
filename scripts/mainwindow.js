const remote = require("electron").remote;

sections = ["highlights", "todo", "notes"];

initializeSections();

function initializeSections() {
    showSection(sections[0]);

    document.getElementById("highlights-btn").addEventListener("click", () => {
        showSection("highlights");
    });

    document.getElementById("todo-btn").addEventListener("click", () => {
        showSection("todo");
    });

    document.getElementById("notes-btn").addEventListener("click", () => {
        showSection("notes");
    });
}

function showSection(name) {
    sections.forEach(element => {
        document.getElementById(element).style.display = "none";
        document.getElementById(element + "-btn").classList.remove("active");
    });
    document.getElementById(name).style.display = "flex";
    document.getElementById(name + "-btn").classList.add("active");
}

document.getElementById("minimize-btn").addEventListener("click", () => {
    remote.getCurrentWindow().minimize();
});

document.getElementById("maximize-btn").addEventListener("click", () => {
    const currentWindow = remote.getCurrentWindow();
    if (currentWindow.isMaximized()) {
        currentWindow.unmaximize();
    } else {
        currentWindow.maximize();
    }
});

document.getElementById("close-btn").addEventListener("click", () => {
    remote.app.quit();
});
