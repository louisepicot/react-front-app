

let scene = new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer({ alpha: true }) : new THREE.CanvasRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    controls,
    root,
    objLoader;

const init = () => {
    renderer.setSize(window.innerWidth, window.innerHeight);
    renderer.setClearColor(0xffffff, 0);
    document.getElementById('three-container').appendChild(renderer.domElement);
    scene.add(light)

    camera = new THREE.PerspectiveCamera(35, window.innerWidth / window.innerHeight, 1, 1000)
    camera.position.set(40, 40, 20);
    camera.lookAt(scene.position)
    scene.add(camera)


    //    const cubeGeometry = new THREE.BoxGeometry(10, 10, 10);
    //    const cubeMaterial = new THREE.MeshBasicMaterial({ color: 0xff2d00  });
    //    const cube = new THREE.Mesh(cubeGeometry, cubeMaterial);

    //     cube.position.set(20, 20, 20);
    //     cube.name = "cube"
    //     scene.add(cube);


    const cubeGeometry2 = new THREE.BoxGeometry(10, 10, 10);
    const cubeMaterial2 = new THREE.MeshBasicMaterial({ color: 0x1ec876 });
    const cube2 = new THREE.Mesh(cubeGeometry2, cubeMaterial2);

    cube2.position.set(0, 90, 0);
    cube2.name = "cube2"
    scene.add(cube2);


    const cubeGeometry3 = new THREE.BoxGeometry(10, 10, 10);
    const cubeMaterial3 = new THREE.MeshBasicMaterial({ color: 0x3600ff });
    const cube3 = new THREE.Mesh(cubeGeometry3, cubeMaterial3);

    cube3.position.set(-20, -2, 0);
    cube3.name = "cube3"
    scene.add(cube3);





    objLoader = new THREE.OBJLoader2();
    objLoader.loadMtl('./blender-super-model.mtl', null, (materials) => {
        objLoader.setMaterials(materials);
        objLoader.load('./blender-super-model.obj', (event) => {
            root = event.detail.loaderRootNode;
            root.position.set(0, 0, 0);
            root.scale.set(4, 4, 4)
            root.name = "salut"
            scene.add(root);
        });
    });


    //const obj = scene.getObjectByName('obj');



    controls = new THREE.OrbitControls(camera, renderer.domElement);
    // controls.movementSpeed = 0.005;
    // controls.domElement = document;
    // controls.rollSpeed = 0.0001;
    // controls.autoForward = false;
    // controls.maxZoom = 100




    const click1 = document.querySelector("#click1")
    const click2 = document.querySelector("#click2")
    const click3 = document.querySelector("#click3")



    click1.addEventListener('click', function (
        otherObject,
        relativeVelocity,
        relativeRotation,
        contactNormal) {

        // console.log(controls.target.copy(camera.position))
        // console.log(camera.position)
        if (root) {
            const from = {
                x: camera.position.x,
                y: camera.position.y,
                z: camera.position.z
            };

            const to = {
                x: root.position.x - 0,
                y: root.position.y - 0,
                z: root.position.z - 30
            };

            const tween1 = new TWEEN.Tween(from)
                .to(to, 600)
                .easing(TWEEN.Easing.Linear.None)
                .onUpdate(function () {
                    camera.position.set(this.x, this.y, this.z);
                    controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)
                    //    camera.target.position.copy(camera.position)
                    //    controls.target.copy(root.postion);
                })
                .onComplete(function () {
                    controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)
                    controls.center = new THREE.Vector3(this.x, this.y, this.z)
                    //    camera.lookAt(cube.position);

                })
                .start()
            document.body.style.backgroundColor = "#3600ff"
            // alert("hit the ground")

        }
    }
    )



    click2.addEventListener('click', function (
        otherObject,
        relativeVelocity,
        relativeRotation,
        contactNormal) {

        const from = {
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z
        };

        const to = {
            x: cube2.position.x,
            y: cube2.position.y,
            z: cube2.position.z - 50
        };
 
        const tween2 = new TWEEN.Tween(from)
            .to(to, 600)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)
            })
            .onComplete(function () {
                controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)
            })
            .start()
        // alert("hit the ground")

        document.body.style.backgroundColor = "#ff2d00"

    }
    )

    click3.addEventListener('click', function (
        otherObject,
        relativeVelocity,
        relativeRotation,
        contactNormal) {

        const from = {
            x: camera.position.x,
            y: camera.position.y,
            z: camera.position.z
        };

        const to = {
            x: cube3.position.x - 0,
            y: cube3.position.y - 0,
            z: cube3.position.z - 50
        };
 
        const tween3 = new TWEEN.Tween(from)
            .to(to, 600)
            .easing(TWEEN.Easing.Linear.None)
            .onUpdate(function () {
                camera.position.set(this.x, this.y, this.z);
                controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)

            })
            .onComplete(function () {
                controls.target = new THREE.Vector3(this.x, this.y, this.z + 60)
            })
            .start()

        document.body.style.backgroundColor = "#1ec876"
        // alert("hit the ground")

    }
    )


    render();

}

const render = () => {
    TWEEN.update();
    // controls.update()
    //const cube = scene.getObjectByName("cube");
    //const cube2 = scene.getObjectByName("cube2");
    //const cube3 = scene.getObjectByName("cube3");



    // if (scene.getObjectByName("salut")) {
    //    const salut = scene.getObjectByName("salut");
    //     // salut.rotation.x += 0.01
    //     camera.lookAt(salut.position)
    // }

    // if (scene.getObjectByName("salut")) {
    //    const salut = scene.getObjectByName("salut");
    //     console.log("root", salut)
    //     salut.rotation.x += 0.01
    // }

    controls.update();
    renderer.render(scene, camera);
    requestAnimationFrame(render);

}






window.onload = init();


