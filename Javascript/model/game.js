class Obstacle {
    constructor(type, lane, x, speed, collision = true) {
        this.type = type;
        this.lane = lane;
        this.x = x;
        this.speed = speed;
        this.collision = collision;

        this.width = 80;
        this.height = 60;
    }
}

class Model {
    constructor() {
        this.reset();
    }

    reset() {
        this.playerLane = 1; // middelste baan start positie
        this.lanesY = [50, 170, 290]; // 3 gefixde banen
        this.playerX = 120;
        this.playerWidth = 70;
        this.playerHeight = 50;

        this.obstacles = [];
        this.score = 0;

        this.gameRunning = false;
        this.gameOver = false;
        this.lastSpawnTime = 0;
    }

    spawnObstacle() {
        const types = ["CopBarricade", "CopBarricade2", "CopBarricade3", "CopBarricade4", "CopBarricade5", "Stop"];
        const pick = types[Math.floor(Math.random() * types.length)];

        if (pick === "CopBarricade") {
            this.obstacles.push(new Obstacle("CopBarricade", 0, 800, 20));
        }

        else if (pick === "CopBarricade2") {
            this.obstacles.push(new Obstacle("CopBarricade2", 2, 800, 20));
        }

        else if (pick === "CopBarricade3") {
            this.obstacles.push(new Obstacle("CopBarricade2", 1, 800, 20))
        }

        else if (pick === "CopBarricade4") {
            this.obstacles.push(new Obstacle("CopBarricade", 0, 800, 20))
            this.obstacles.push(new Obstacle("CopBarricade2", 1, 800, 20));
        }

        else if (pick === "CopBarricade5") {
            this.obstacles.push(new Obstacle("CopBarricade", 1, 800, 20))
            this.obstacles.push(new Obstacle("CopBarricade2", 2, 800, 20));
        }

        else if (pick === "Stop") {
            this.obstacles.push(new Obstacle("CopBarricade", 0, 800, 20, true));
            this.obstacles.push(new Obstacle("Stop", 1, 800, 20, false));
            this.obstacles.push(new Obstacle("CopBarricade2", 2, 800, 20, true));
        }
    }

    update() {
        if (!this.gameRunning) return;

        // Move obstacles
        this.obstacles.forEach(o => o.x -= o.speed);

        // Remove off-screen
        this.obstacles = this.obstacles.filter(o => o.x > -200);
    }

    checkCollision() {
        const playerY = this.lanesY[this.playerLane];

        for (let o of this.obstacles) {
            if (!o.collision) continue; // ignore STOP middle

            const oY = this.lanesY[o.lane];

            const overlapX =
                this.playerX < o.x + o.width &&
                this.playerX + this.playerWidth > o.x;

            const overlapY =
                playerY < oY + o.height &&
                playerY + this.playerHeight > oY;

            if (overlapX && overlapY) {
                this.gameRunning = false;
                this.gameOver = true;
            }
        }
    }
}
