class Plinko{
constructor(x,y,r){
var options={
isStatic: true
}
this.body=Bodies.circle(this.x, this.y,r, options)
World.add(world, this.body);

this.x=x;
this.y=y;
this.r=r
}
display(){
var pos = this.body.position;
var angle = this.body.angle;
push();
translate (pos.x, pos.y);
rotate(angle);
nostroke();
fill("white")
ellipseMode(RADIUS);
ellipse(0,0, this.r, this.r);
pop();
}
}