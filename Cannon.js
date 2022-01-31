class Cannon{
    constructor(x,y,width,height,angle){
    this.x = x 
    this.y = y
    this.width = width
    this.height = height
    this.angle = angle
    this.Image = loadImage("assets/canon.png")
    this.Base = loadImage("assets/cannonBase.png")

    }
  display(){
   
    if(keyIsDown(UP_ARROW)&&this.angle<70) {
     this.angle++

   }
   if(keyIsDown(DOWN_ARROW)&&this.angle>-30){
     this.angle--
   }
   push();
   translate(this.x,this.y)
   rotate(this.angle)
   imageMode(CENTER)
   image(this.Image,0,0,this.width,this.height)
   pop();
   image(this.Base,70,20,200,200)
  }
}