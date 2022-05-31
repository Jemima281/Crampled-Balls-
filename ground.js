class Ground {
    constructor(x, y, width, height) {
      this.x = x;
      this.y = y;
      this.width = width;
      this.height = height;
      var ground = {
        isStatic: true, 
      }
      this.body = Bodies.rectangle(x,y,width,height, ground);
    }
   display(){
    push()
    translate(this.body.position.x, this.body.position.y)
    rectMode(CENTER)
    strokeWeight()
    fill(255,255,0)
    rect(0,0,this.width, this.height)
    pop()
   }
  }