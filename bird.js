class Bird{

    constructor(x,y)
    {
        var options={restitution:0.4, friction : 0.4, density : 1 }
        this.body=Bodies.circle(x,y,35,options);
        this.radius = 35;
        World.add(world,this.body);
    }
    display()

    {
        var pos=this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;

        var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
        rotate(angle);
       // rectMode(CENTER);
       ellipseMode(RADIUS);
        fill("pink");
        ellipse(0,0,this.radius);
        pop();
    }
}