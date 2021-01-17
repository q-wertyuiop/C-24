class Dustbin{

  constructor(x,y){
   this.x=x;
   this.y=y;
   this.dustbinWidth=200;
   this.dustbinHeight=100;
   this.wallThickness=20;
   this.angle=0;

   this.bottomBody=Bodies.rectangle(this.x,this,y,this.dustbinWidth,this.wallThickness,{isStatic:true})
   this.leftWallBody=Bodies.rectangle(this.x-this.dustbinWidth/2,this.y-this.dustbinHeight/2,this.wallThickness,this.dustbinHeight,{isStatic:true})
   Matter.Body.setAngle(this.leftWallBody,this.angle);

   this.rightWallBody=Bodies.rectangle(this.x+this.dustbinWidth/2,this.y-this.dustbineight/2,this.wallThickness,this.dustbinHeight,{isStatic:true});
   Matter.Body.setAngle(this.rightWallBody,-1*this.angle);
   World.add(world,this.bottomBody)
   World.add(world,this.leftWallBody)
   World.add(world,this.rightWallBody);
  
  }
  display(){

   var posLeft = this.leftWallBody.position;
   var posBtm = this.bottomBody.position;
   var posRight = this.rightWallBody.position;

   push();
   translate(posLeft.x,posLeft.y)
   rectMode(CENTER);
   stroke(255);
   angleMode(RADIANS);
   fill(255);
   rotate(this.angle)
   rect(0,0,this.wallThickness,this.dustbinHeight);
   pop();

   push();
   translate(posRight.x,posRight.y)
   rectMode(CENTER);
   stroke(255);
   angleMode(RADIANS);
   fill(255);
   rotate(-1*this.angle)
   rect(0,0,this.wallThickness,this.dustbinHeight);
   pop();

   push()
   translate(posBtm.x,posBtm.y)
   rectMode(CENTER);
   stroke(255);
   angleMode(RADIANS);
   fill(255);
   rect(0,0,this.wallThickness,this.dustbinHeight);
   pop();



  }

}