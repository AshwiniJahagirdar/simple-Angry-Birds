const Engine = Matter.Engine;
const World= Matter.World;
const Bodies = Matter.Bodies;

var engine, world;

function setup(){
    var canvas = createCanvas(1200,600);
    engine = Engine.create();
    world = engine.world;

   /* var ground_options ={
        isStatic: true
    }*/

  
     box1=new Box(900,500,50,75);
     box2=new Box(1100,500,50,75);
     box3 = new Box (900,450,50,75);
     box4 = new Box (1100,450,50,75);
     box5 =new Box (1000,410,50,75);
     ground = new Ground (600,590,1200,15);
     pig1 = new Pig (1000,500);
     pig2 = new Pig (1000,450);
     log1 = new Log (1000,480,250,PI /2);
     log2 = new Log (1000,420,250,PI /2);
     log3 = new Log (950,370,150,PI/6);
     log4 = new Log (1050,370,150,-PI/6);
     bird1 = new Bird (200, 200);



      // ground = Bodies.rectangle(200,390,200,20,ground_options);
    //World.add(world,ground);
    /*var ball_options ={
        restitution: 1.0
    }

    ball = Bodies.circle(200,100,20, ball_options);
    World.add(world,ball);

    console.log(ground);*/
}

function draw(){
    background(0);
    Engine.update(engine);
    box1.display();
    ground.display();
    box2.display();
    pig1.display();
    log1.display();
    box3.display();
    box4.display();
    log2.display();
    pig2.display();
    box5.display();
    log3.display();
    log4.display();
    bird1.display();
   
    //rectMode(CENTER);
    //rect(ground.position.x,ground.position.y,400,20);
    
    /*ellipseMode(RADIUS);
    ellipse(ball.position.x, ball.position.y, 20, 20);*/
}