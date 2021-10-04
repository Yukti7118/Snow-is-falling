
var snow ,winterbg
function setup() {
  createCanvas(1000,600);
 
  
}
function preload(){
  winterbg=loadImage("snow3.jpg")

}
function draw() {
  background(winterbg);  
  drawSprites();

  snow.display();
}