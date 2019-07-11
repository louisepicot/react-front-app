

let scene = new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    controls;

const init = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 1);
    document.getElementById('three-container').appendChild(renderer.domElement);
    scene.add(light)

    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(0, 10, 10);
    camera.lookAt(scene.position)
    scene.add(camera)

    // const lightDir = new THREE.DirectionalLight(0xffefcc);
    // lightDir.position.set(0, 5, 150);
    // lightDir.rotation.y = 10
    // lightDir.name = 'lightDir'
    // scene.add(lightDir)

    // const lightDirBack = new THREE.DirectionalLight(0xffefcc);
    // lightDirBack.position.set(0, 105, 100);
    // lightDirBack.castShadow = true;
    // lightDirBack.name = 'lightDirB'
    // scene.add(lightDirBack)

    // const lightDirRight = new THREE.DirectionalLight(0xffefcc);
    // lightDirRight.position.set(0, 205, 50);
    // lightDirRight.castShadow = true;
    // lightDirRight.name = 'lightDirR'
    // scene.add(lightDirRight)

    // const lightDirLeft = new THREE.DirectionalLight(0xff01dd);
    // lightDirLeft.position.set(30, -25, 0);
    // lightDirLeft.castShadow = true;
    // lightDirLeft.name = 'lightDirL'
    // scene.add(lightDirLeft)

    var cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
    var cubeMaterial = new THREE.MeshBasicMaterial({ color: 0x1ec876 });
    var cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    cube.position.set(0, 0, 0);
    cube.name = "cube"
    // scene.add(cube);




    const objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('./blender-super-model.mtl', null, (materials) => {
        objLoader.setMaterials(materials);
        objLoader.load('./blender-super-model.obj', (event) => {
            const root = event.detail.loaderRootNode;
            root.name = "root"
            root.position.set(0, 0, 0);
            scene.add(root);
        });
    });




    controls = new THREE.OrbitControls(camera, renderer.domElement);

    // controls.movementSpeed = 0.005;
    // controls.domElement = document;
    // controls.rollSpeed = 0.0001;
    // controls.autoForward = false;
    // controls.maxZoom = 100




    render();

}

const render = () => {
    // var root = scene.getObjectByName("root");
    // root.rotation.x += 0.5
    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}






window.onload = init();


