//Projeto 21; 15/04/22;

//constantes
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

//variaveis
var ball, ground, left, right;
var radius = 40;

//variaveis fixas para usar a biblioteca matter
//inicializou as variaveis mas não declarou
var engine, world;

//inicializar - executa uma vez
function setup() {
	//cria a tela
	createCanvas(600, 400);

	//inicializa o mecanismo e o mundo
	engine = Engine.create();
	world = engine.world;

	//cria o mecanismo da ball
	var ball_options = {
		isStatic:false,
		restitution:0.3,
		friction:0,
		density:1.2
	}

	//cria o corpo da ball
	ball = Bodies.circle(50,30,radius/2,ball_options);
	World.add(world, ball);

	//cria o corpo do chão com base na class Ground
	ground = new Ground(300,370,width,20);
	
	//criar a left com a class ground
	left = new Ground(300,200,10,100);

	//criar a right com a class ground
	right = new Ground(400,200,10,100)

	Engine.run(engine);
}

//funçoes - executa varias vezes
function draw() {
	//cor de fundo
	background(0);


	//exibe a ball
	ellipse(ball.position.x,ball.position.y,radius,radius);
  
	//exibe o chão
	ground.display();
	left.display();
	right.display();
}

//Aplicar força a bola
function keyPressed(){
	if(keyCode == UP_ARROW){
		Matter.Bodies.applyForce(ball,ball.position, {x:85, y:-85});
	}

}

