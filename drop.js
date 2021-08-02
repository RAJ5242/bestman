class createDrop {
    constructor(x,y){
        var options = {
           restitution:0.1,friction:0.001
        }
       
        this.rain = Bodies.circle(x,y,5,options);
        this.radius = 5;
        World.add(world, this.rain)
        //load Image for BestMan
        
    }
     updateY(){
         if(this.rain.position.y>height){
             Matter.Body.setPosition(this.rain,{x:random (0,400),y:random(0,400)})
         }
     }
    showDrop(){
    fill("blue")
        var pos = this.rain.position;
        ellipseMode(CENTER);
        //display the image for BestMan if the frameCount is over 200, otherwise display the boy with umbrella image
        ellipse(pos.x,pos.y,this.radius,this.radius);
    }
}
