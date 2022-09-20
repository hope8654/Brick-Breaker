import './style.css'
import Block from "./model/Block.js";
import Sprite from "./model/Sprite.js";
import Ball from "./model/Ball.js";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const redBlock = new Block(20, 40, 50, 50, "red");

const blueSprite = new Sprite(canvas.width / 2, canvas.height / 2, 50, 50, "blue", 2, -2);

function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  redBlock.draw(ctx);
  blueSprite.draw(ctx);
  blueSprite.move();
  blueBall.bounce(canvas.width, canvas.height);

  window.requestAnimationFrame(draw);
}

draw();