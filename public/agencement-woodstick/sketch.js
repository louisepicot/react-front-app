let angle = 0;
let lego;

function preload() {
  lego = loadModel('models/obj.obj', true)

}

function setup() {

  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
    background(0)

 var locX = mouseX - height / 2;
 var locY = mouseY - width / 2;

 ambientLight(60, 60, 60);
 pointLight(255, 255, 255, locX, locY, 100);
    noStroke()
    rotateX(angle)
    rotateY(angle * 1.02)
    rotateZ(angle * 0.04)
    specularMaterial(250);
     scale(4)
    model(lego)
  
    angle += 0.003

}

 