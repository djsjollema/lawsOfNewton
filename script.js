const canvas = document.getElementById("canvas");
const context = canvas.getContext("2d");

const ball = new Ball(100,100,25,"yellow",new Vector(1,2));

addEventListener('keydown',(evt)=>{
  switch (evt.keyCode) {
    case 37:
        ball.velocity.add(new Vector(-1,0));
      break;
  case 38:
      ball.velocity.add(new Vector(0,-1));
    break;
case 39:
    ball.velocity.add(new Vector(1,0));
  break;
case 40:
    ball.velocity.add(new Vector(0,1));
  break;
}

})

function animate(){
  requestAnimationFrame(animate);
  context.clearRect(0,0,800,450);
  if(ball.x < ball.r || ball.x > 800-ball.r){
    ball.velocity.dx = - ball.velocity.dx;
  }
  if(ball.y < ball.r || ball.y > 450-ball.r){
    ball.velocity.dy = - ball.velocity.dy;
  }

  ball.update();
  ball.draw(context);
  ball.velocity.draw(context,ball.x,ball.y,10);
}

animate();
