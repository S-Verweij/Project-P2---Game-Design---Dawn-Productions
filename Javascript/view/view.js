class View {
    constructor(model, canvasId) {
        this.model = model;

        this.canvas = document.getElementById(canvasId);
        this.ctx = this.canvas.getContext("2d");

        this.assets = {};
        this.loadAssets();
    }

    loadAssets() {
        this.loadImage("player", "Assets/Player1Car.png");
        this.loadImage("player2", "Assets/Player2Car.png");
        this.loadImage("CopBarricade", "Assets/CopBarricade.png");
        this.loadImage("CopBarricade2", "Assets/CopBarricade2.png");
        this.loadImage("CopBarricade3", "Assets/CopBarricade3.png");
        this.loadImage("Stop", "Assets/Stop.png");
    }

    loadImage(key, src) {
        const img = new Image();
        img.src = src;
        this.assets[key] = img;
    }

    draw() {
        this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);

        this.drawPlayer();
        this.drawObstacles();
    }

    drawPlayer() {
        const y = this.model.lanesY[this.model.playerLane];
        const x = this.model.playerX;

        const sprite = this.assets["player"];
        this.ctx.drawImage(sprite, x, y, this.model.playerWidth, this.model.playerHeight);
    }

    drawObstacles() {
        for (let o of this.model.obstacles) {
            const y = this.model.lanesY[o.lane];
            const sprite = this.assets[o.type];

            this.ctx.drawImage(sprite, o.x, y, o.width, o.height);
        }
    }
}
