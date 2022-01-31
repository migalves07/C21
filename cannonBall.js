class cannonBall{
  constructor(x,y){
   this.raio = 30
   var options={
    isStatic:true
   }

 this.bodies = Bodies.circle(x,y,this.raio,options,)
 this.image = loadImage("assets/cannonBall.png")
 this.trajetoria = []
 World.add(world,this.bodies)
  }
  
  atirar(){
    var novoangulo = cannon.angle - 28
    novoangulo = novoangulo * (3.14/180)
    var velocidade = p5.Vector.fromAngle(novoangulo)
    velocidade.mult(0.5)
    Matter.Body.setStatic(this.bodies,false)
    Matter.Body.setVelocity(this.bodies,{x: velocidade.x * (180/3.14),y: velocidade.y * (180/3.14)})

  }
  display() {
    push()
    translate(this.bodies.position.x,this.bodies.position.y)
    rotate(this.bodies.angle)
    imageMode(CENTER)
    image(this.image,0,0,this.raio,this.raio)
    pop()
  }  
  
}
   
