class Controller {
    constructor(model, view) {
        this.model = model;
        this.view = view;

        this.lastFrame = 0;
        this.spawnInterval = 1500; // ms
    }

    startGame() {
        this.model.reset();
        this.model.gameRunning = true;
        this.model.lastSpawnTime = performance.now() + 1000;
        this.loop(0);
    }

    restartGame() {
        this.model.reset();
        this.model.gameRunning = true;
        document.getElementById("restart-btn").classList.add("hidden");
        this.model.lastSpawnTime = performance.now() + 1000;
        this.loop(0);
    }

    moveUp() {
        if (this.model.playerLane > 0) this.model.playerLane--;
    }

    moveDown() {
        if (this.model.playerLane < 2) this.model.playerLane++;
    }

    loop(timestamp) {
        if (!this.model.gameRunning) return;
        
        const delta = timestamp - this.lastFrame;
        this.lastFrame = timestamp;

        // Spawn logic
        if (timestamp - this.model.lastSpawnTime > this.spawnInterval) {
            this.model.spawnObstacle();
            this.model.lastSpawnTime = timestamp;
        }

        // Update model
        this.model.update();
        this.model.checkCollision();

        // Score
        this.model.score += delta / 1000;
        document.getElementById("score").innerText =
            "Score: " + Math.floor(this.model.score);

        // Render
        this.view.draw();

        // Game over?
        if (this.model.gameOver) {
            document.getElementById("restart-btn").classList.remove("hidden");
            return;
        }

        requestAnimationFrame(this.loop.bind(this));
    }
}
