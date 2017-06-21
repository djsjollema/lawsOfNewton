class Ball{
  constructor(x,y,r,color,velocity){
    this.x = x;
    this.y = y;
    this.r = r || 15;
    this.color = color || "#ffff00";
    this.velocity = velocity || new Vector(1,0);
  }

  update(){
    this.x += this.velocity.dx;
    this.y += this.velocity.dy;
  }

  draw(context){
    context.beginPath();
    context.fillStyle = this.color;
    context.lineWidth = 3;
    context.arc(this.x,this.y,this.r,0,Math.PI*2);
    context.stroke();
    context.fill();
    context.closePath();
  }
}
