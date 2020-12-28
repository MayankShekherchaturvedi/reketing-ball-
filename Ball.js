class Ball{
    constructor(x, y, width, height, angle) {
        var options = {
            
            'frictionAir':0.00000000000001,
            'density':5.0
        }
        this.body = Bodies.rectangle(x, y, width, height, options);
        this.width = width;
        this.height = height;
        World.add(world, this.body);
      }
      display(){
        var angle = this.body.angle;
        push();
        translate(this.body.position.x, this.body.position.y);
        rotate(angle);
        ellipse( 0, 0, this.width, this.height);
        pop();
      }
}