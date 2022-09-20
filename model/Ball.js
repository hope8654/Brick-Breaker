import Sprite from "./Sprite.js";

class Ball extends Sprite {
    bounce(canvasWidth, canvasHeight) {
        if (this.x > canvasWidth || this.x < 0) {
            this.dx *= -1; // flip dx sign
        }

        if (this.y > canvasHeight || this.y < 0) {
            this.dy *= -1; // flip dy sign
        } 
    }
}

export default Ball;