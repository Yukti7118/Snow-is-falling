class Snow{
    constructor(x,y){
    var options = {
        'restitution':0.8,
        'friction':1.0,
        'density':1.0
    }
    this.snowImg=loadImage("snow5.webp")
    this.trajectory =[];
}   


display(){

    for(var i=0; i<this.trajectory.length; i++){
        image(this.snowImg, this.trajectory[i][0], this.trajectory[i][1]);
      }
}
}