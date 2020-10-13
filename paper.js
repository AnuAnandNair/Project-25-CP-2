class paper
{
	constructor(x,y,r)
	{
		var options={
			isStatic:false,
			restitution:0.3,
			friction:0.5,
			density:1.2			
		}
		//this.r=r;
		//this.body=Bodies.circle(x, y, this.r/2, options);
		this.x=x;
		this.y=y;
		this.r=r;
		this.body=Bodies.circle(this.x, this.y, (this.r-20)/2, options);//this.x and this.y has to be stored first then only it can be used
		//this.body=Bodies.circle(this.x, this.y, this.r/2, options);
		this.image=loadImage("paper.png");
		World.add(world, this.body);

	}
	display()
	{
			
			var paperpos=this.body.position;		

			push();
			translate(paperpos.x, paperpos.y);			
			//strokeWeight(3);
			//fill(255,0,255);			
			//ellipseMode(CENTER);
			//ellipse(0,0,this.r, this.r);
			imageMode(CENTER); 
			image(this.image,0,0,this.r,this.r);
			pop();
			
	}

}