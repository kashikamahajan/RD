class Box extends BaseClass{
  constructor(x,y,scale,angle){
    super(x,y,20,50,angle);
    this.width=this.width*scale;
    this.height=this.height*scale;

    this.image = loadImage("raindrop.png");
    Matter.Body.setAngle(this.body, angle);
  }
}