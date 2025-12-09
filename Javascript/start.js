window.addEventListener("load", () => {
    const model = new Model();
    const view = new View(model, "game-canvas");
    const controller = new Controller(model, view);

    document.getElementById("start-btn").addEventListener("click", () => {
        controller.startGame();
        document.getElementById("start-btn").style.display = "none";
    });

    document.getElementById("restart-btn").addEventListener("click", () => {
        controller.restartGame();
    });

    document.getElementById("btn-up").addEventListener("click", () => {
        controller.moveUp();
    });

    document.getElementById("btn-down").addEventListener("click", () => {
        controller.moveDown();
    });

    document.addEventListener("keydown", (e) => {
    if (e.key === "w" || e.key === "W") {
        controller.moveUp();
    }
    if (e.key === "s" || e.key === "S") {
        controller.moveDown();
    }
});

});
