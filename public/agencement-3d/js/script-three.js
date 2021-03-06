let renderer, scene, camera, mesh;
const distance = 100;
let geometry = new THREE.Geometry();
const textureArray = []
textureArray.push(new THREE.TextureLoader().load("../images/aaron-news.jpg"))
textureArray.push(new THREE.TextureLoader().load("../images/ScreenShotYoutube.png"))
textureArray.push(new THREE.TextureLoader().load("../images/wiki-girl2.jpg"))
textureArray.push(new THREE.TextureLoader().load("../images/google.png"))
textureArray.push(new THREE.TextureLoader().load("../images/scan-carto.png"))



init();
animate();

function init() {

    renderer = new THREE.WebGLRenderer({
        alpha: true
    });
    renderer.setClearColor(0, 0, 0, 0);
    renderer.setSize(window.innerWidth, window.innerHeight);
    document.getElementById('container').appendChild(renderer.domElement);

    scene = new THREE.Scene();

    camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
    camera.position.set(30, 10, 1000);
    scene.add(camera);

    /* 
                for (let index = 0; index < 6; index++) {

                    let cube = new THREE.CubeGeometry(80, 80, 80);
                    let material = new THREE.MeshBasicMaterial({
                        map: textureArray[index]
                    });
                    // const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808080 + 0x808080, wireframe: true });
                    mesh = new THREE.Mesh(cube, material);
                    mesh.position.x = Math.random() * distance * 30 - distance;
                    mesh.position.y = Math.random() * distance * 30 - distance;
                    mesh.position.z = Math.random() * distance * 30 - distance;
                    mesh.scale.x = mesh.scale.y = Math.random() * 10 + 5;


                    // geometry.vertices.push(new THREE.Vector3(mesh.position))
                    scene.add(mesh);  }*/

    let cube = new THREE.CubeGeometry(50, 70, 10);
    let material = new THREE.MeshBasicMaterial({
        map: textureArray[0]
    });
    // const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808080 + 0x808080, wireframe: true });
    mesh = new THREE.Mesh(cube, material);
    mesh.position.x = 80;
    mesh.position.y = 10;
    mesh.position.z = 10;
    mesh.scale.x = mesh.scale.y = 10;
    scene.add(mesh);
    geometry.vertices.push(new THREE.Vector3(mesh.position))
    let line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xffffff
    }))
    scene.add(line)


    //cube2
    let cube2 = new THREE.CubeGeometry(70, 50, 10);
    let material2 = new THREE.MeshBasicMaterial({
        map: textureArray[1]
    });
    // const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808080 + 0x808080, wireframe: true });
    mesh = new THREE.Mesh(cube2, material2);
    mesh.position.x = 30;
    mesh.position.y = 20;
    mesh.position.z = 30;
    mesh.rotation.x = 10;
    mesh.rotation.y = 20;
    mesh.rotation.z = 00;
    mesh.scale.x = mesh.scale.y = 10;
    scene.add(mesh);
    geometry.vertices.push(new THREE.Vector3(mesh.position))
    let line2 = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xffffff
    }))
    scene.add(line2)



    //cube3
    let cube3 = new THREE.CubeGeometry(70, 50, 10);
    let material3 = new THREE.MeshBasicMaterial({
        map: textureArray[2]
    });
    // const material = new THREE.MeshBasicMaterial({ color: Math.random() * 0x808080 + 0x808080, wireframe: true });
    mesh = new THREE.Mesh(cube3, material3);
    mesh.position.x = 100;
    mesh.position.y = -600;
    mesh.position.z = 200;
    mesh.rotation.x = 00;
    mesh.rotation.y = -3;
    mesh.rotation.z = -20;
    mesh.scale.x = mesh.scale.y = 20;
    scene.add(mesh);
    geometry.vertices.push(new THREE.Vector3(mesh.position))
    let line3 = new THREE.Line(geometry, new THREE.LineBasicMaterial({
        color: 0xffffff
    }))
    scene.add(line3)




    renderer.render(scene, camera);



}





const controls = new THREE.OrbitControls(camera);

//controls.update() must be called after any manual changes to the camera's transform
camera.position.set(1, 3, 1);

controls.update();

console.log(controls)

function animate() {
    requestAnimationFrame(animate);
    // mesh.rotation.x += 0.04;
    // mesh.rotation.y += 0.02;
    // this.controls.update();
    renderer.render(scene, camera);
}
