import "./style.css";
import Block from "./model/Block.js";
import Ball from "./model/Ball.js";
import Paddle from "./model/Paddle";

const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");

const blueBall = new Ball(canvas.width / 2, canvas.height / 2, 50, 50, "blue", 2, -2);

const paddle = new Paddle(canvas.width / 2, canvas.height / 2, 80, 10, "blue");


function draw() {
  ctx.clearRect(0, 0, canvas.width, canvas.height)
  
  blueBall.draw(ctx);
  paddle.draw(ctx);
  blueBall.move();
  paddle.move();
  blueBall.bounce(canvas.width, canvas.height);

  window.requestAnimationFrame(draw);
}

draw();