class Stone {
    constructor(x,y,r) {
      var options = {
          isStatic: false,
          restitution:0,
          density: 1,
      }
      this.body = Bodies.circle(x,y,r,options);
      this.r = r;
      this.image = loadImage("sprites/stone.png");
      World.add(world, this.body);
    }
    display(){
      var pos =this.body.position;
        rectMode(CENTER);
        fill("yellow");
      image(this.image,pos.x, pos.y, this.r, this.r);
    }
  };