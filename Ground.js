class Ground{
    //caracteristicas
    constructor(x, y, width, height){

        //criar o mecanismo do corpo - sketch 24
        var options = {
            isStatic: true
        }

        //valores que são usados para criar o corpo
        this.x = x;
        this.y = y;
        this.width = width;
        this.height = height;

        //criar o corpo - sketch 32
        this.body = Bodies.rectangle(x,y,width,height,options);

        //adicionar ao mundo - sketch 33
        World.add(world,this.body);
    }

    //funçoes
    //função mostrar na tela
	display(){
	    var pos = this.body.position;
       
		push();
		translate(pos.x, pos.y);
		rectMode(CENTER);
		rect(0,0,this.width, this.height);
		pop();	
	}   
}