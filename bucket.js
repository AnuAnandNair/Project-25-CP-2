class bucket {

	constructor(x,y){

		this.x=x;
		this.y=y;
		this.dustbinWidth=200;
		this.dustbinHeight=150;
		this.wallWidth=20;
		this.angle=0;	
        
        var options = {
            isStatic:true
        }

        this.bottomobj=Bodies.rectangle(this.x, this.y, this.dustbinWidth, this.wallWidth, options);
        
		this.leftWall=Bodies.rectangle(this.x-this.dustbinWidth/2+5, this.y-this.dustbinHeight/2, this.wallWidth, this.dustbinHeight, options);
		Matter.Body.setAngle(this.leftWall, this.angle);
		
		this.rightWall=Bodies.rectangle(this.x+this.dustbinWidth/2-5, this.y-this.dustbinHeight/2, this.wallWidth, this.dustbinHeight, options);
        Matter.Body.setAngle(this.rightWall, (-1)*this.angle);
		
		this.image=loadImage("dustbingreen.png");

		World.add(world, this.bottomobj);
		World.add(world, this.leftWall);
		World.add(world, this.rightWall);

	}
	display()
	{
			var bottompos=this.bottomobj.position;
			var leftpos=this.leftWall.position;
			var rightpos=this.rightWall.position;			

			push();
			translate(leftpos.x, leftpos.y);
			rectMode(CENTER);			
			stroke("white");
			fill("white");			
			rotate(this.angle);
			rect(0,0,this.wallWidth, this.dustbinHeight);
			pop();

			push();
			translate(rightpos.x, rightpos.y);
			rectMode(CENTER);
			stroke(255);
			//angleMode(RADIANS);
			fill("white");
			rotate(-1*this.angle);
			rect(0,0,this.wallWidth, this.dustbinHeight);
			pop();

			push();
			translate(bottompos.x, bottompos.y);
			rectMode(CENTER);
			stroke(255);
			//angleMode(RADIANS);
			imageMode(CENTER);
			fill("white");
			rect(0,0,this.dustbinWidth, this.wallWidth);
			image(this.image,0,-75,this.dustbinWidth, this.dustbinHeight); //image has to be applied to bottom object
			pop();
			
	}

}