class Paper {
    constructor(x,y,radius) {
      var options = {
          isStatic:false,
          restitution : 0.3,
          density : 1.2,
          friction : 10
      } 
      this.body = Bodies.circle(x,y,radius-80/2,options);
      this.radius = radius;
      this.image = loadImage("paper.png");
      World.add(world, this.body);
    }
    display(){
      var pos = this.body.position;
      imageMode(CENTER);
      image(this.image,pos.x,pos.y,this.radius,this.radius);
    }
  };