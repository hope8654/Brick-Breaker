import Sprite from "./Sprite.js";


class Paddle extends Sprite {
    constructor(x, y, width, height, color, dx, dy) {
        super(x, y, width, height, color, 0, 0)
    }

}
export default Paddle;