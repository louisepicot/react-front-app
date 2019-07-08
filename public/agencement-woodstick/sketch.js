let angle = 0;
let lego;

function preload() {
  lego = loadModel('models/obj.obj', true)
  // let lego2 = loadModel('models/big.obj', true)
  // console.log(lego)
}

function setup() {
  // createCanvas(200, 200, WEBGL);
  createCanvas(window.innerWidth, window.innerHeight, WEBGL);
}

function draw() {
    background(0)
    // ambientLight(255, 0, 255)
    // directionalLight(255, 255, 255, 0, 0, 1)
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

  //  background(0);
  // const radius = width * 1.5;
  // let dx = mouseX - width / 2
  // let dY = mouseY - height / 2
  // let v = createVector (dx, dy, 0)
  // v.div(100)
  // directionalLight(255, 255, 255, 200, 0, 0)
  // orbitControl();
  // normalMaterial();
  // translate(0, 0, -100);
  // for (let i = 0; i <= 10; i++) {
  //   for (let j = 0; j <= 10; j++) {
  //     push();
  //     let a = j / 10 * PI;
  //     let b = i / 10 * PI;
  //     translate(sin(2 * a) * radius * sin(b), cos(b) * radius / 2, cos(2 * a) * radius * sin(b));
  //     if (j % 0.9 === 0) {
  //       specularMaterial(230, 280, 260);
  //       cone(130, 110);
  //     } else {
  //       specularMaterial(52, 52, 52);
  //       box(30, 30);
  //     }
  //     pop();
  //   }
  // }


  // let locX = mouseX - height / 2;
  // let locY = mouseY - width / 2;

  // ambientLight(160, 160, 160);
  // pointLight(255, 255, 255, locX, locY, 10);

  // push();
  // noStroke()
  // translate(350, 300, 350);
  // rotateZ(frameCount * 0.001);
  // rotateX(frameCount * 0.001);
  // rotateY(frameCount * 0.001);
  // specularMaterial(250);
  // scale(5)
  // model(lego)
  //  pop();

  // model(lego).position.y = 79;
  //  model(lego).position.x = 39;
  //   model(lego).position.z = 39;



  // translate(width / 4, height / 4, 0);
  // rotateZ(frameCount * 0.01);
  // rotateX(frameCount * 0.01);
  // rotateY(frameCount * 0.01);


      //  push();
      //  rotateZ(frameCount * 0.01);
      //  rotateX(frameCount * 0.01);
      //  rotateY(frameCount * 0.01);
      //    specularMaterial(250);
      //    scale(10)
      //  model(lego2)

      //  pop();

}

  // background(0)
  // ambientLight(255, 0, 255)
  // directionalLight(255, 255, 255, 0, 0, 1)

  // noStroke()
  // rotateX(angle)
  // rotateY(angle * 1.02)
  // rotateZ(angle * 1.04)
  // normalMaterial()
  // model(lego)
  // angle += 0.01
