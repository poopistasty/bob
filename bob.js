class Bob {
    constructor(x,y) {
      var options = {
        restitution: 0.3,
        isStatic: false
      }
      this.body = Bodies.rectangle(x,y,50,50,options);
      this.width = 50;
      this.height = 50;
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
      ellipseMode(RADIUS);
      fill("white");
      ellipse(pos.x, pos.y, this.width, this.height);
    }
  };