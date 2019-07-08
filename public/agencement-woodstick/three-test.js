function loadScene(){
        const scene = new THREE.Scene();
			const camera = new THREE.PerspectiveCamera(55, window.innerWidth / window.innerHeight, 1, 10000);
			camera.position.set(0, 0, 53);
			camera.lookAt(scene.position);
			const renderer = new THREE.WebGLRenderer({canvas: artifactCanvas});
			renderer.setSize(window.innerWidth, window.innerHeight);
			renderer.setClearColor(new THREE.Color(0x00000, 1.0));
			// document.getElementById('container').appendChild(renderer.domElement);

			// const geometry = new THREE.BoxGeometry(1, 1, 1);
			// const material = new THREE.MeshBasicMaterial({
			//     color: 0x00ff00
			// });
			//const cube = new THREE.Mesh(geometry, material);
			// scene.add(cube);
			const manager = new THREE.LoadingManager();
			manager.onProgress = function (item, loaded, total) {

			    console.log("ono", item, loaded, total);

			};
			const loader = new THREE.OBJLoader(manager);
			loader.load('models/obj.obj', function (object) {
			    console.log("object", object);
			    object.traverse(function (child) {

			        if (child instanceof THREE.Mesh) {

			             child.material.color = 0xffb830;

			        }

			    });
                   object.position.set(0, 0, -53);
			    obj = object
                scene.add(obj);
                window.obj = obj;
				
            });
            function preload() {
                lego = loadModel('models/big.obj', true)
                console.log(lego)
            }


			const animate = function () {
			    // requestAnimationFrame(animate);

			    // obj.rotation.x += 0.01;
			    // obj.rotation.y += 0.01;

			    renderer.render(scene, camera);
			};

			
			
			animate();
        }

window.onload = loadScene;





// const loader = new THREE.OBJLoader();

//  loader.load('models/obj.obj', function (object) {
//         scene.add(object);
//     },
//     // called when loading is in progresses
//     function (xhr) {
//         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
//     },
//     // called when loading has errors
//     function (error) {
//         console.log('An error happened');
//     }
// );

			// const scene = new THREE.Scene();


			// const renderer = new THREE.WebGLRenderer();
			// renderer.setSize(window.innerWidth, window.innerHeight);
			// document.getElementById('container').appendChild(renderer.domElement);

			// const geometry = new THREE.BoxGeometry(1, 1, 1);
			// const material = new THREE.MeshBasicMaterial({
			//     color: 0x00ff00
			// });
			// const cube = new THREE.Mesh(geometry, material);
			// scene.add(cube);
			// const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 1, 10000);
			// camera.position.set(10, 10, 1000);
			// scene.add(camera);

			// //  let geometry = new THREE.Geometry();
			// // for (let index = 0; index < 100; index++) {

			// //     const cube = new THREE.CubeGeometry(30, 30, 30);
			// //     const material = new THREE.MeshBasicMaterial({
			// //         color: Math.random() * 0x808080 + 0x808080,
			// //         wireframe: true
			// //     });
			// //     mesh = new THREE.Mesh(cube, material);
			// //     mesh.position.x = Math.random() * distance * 2 - distance;
			// //     mesh.position.y = Math.random() * distance * 2 - distance;
			// //     mesh.position.z = Math.random() * distance * 2 - distance;
			// //     mesh.scale.x = mesh.scale.y = Math.random() * 10 + 5;


			// //     geometry.vertices.push(new THREE.Vector3(mesh.position))
			// //     scene.add(mesh);

			// // }

			// // let line = new THREE.Line(geometry, new THREE.LineBasicMaterial({
			// //     color: 0x000000
			// // }))
			// // scene.add(line)


			// // const loader = new THREE.OBJLoader();

			// // loader.load('models/obj.obj', function (object) {
			// //         scene.add(object);
			// //     },
			// //     // called when loading is in progresses
			// //     function (xhr) {
			// //         console.log((xhr.loaded / xhr.total * 100) + '% loaded');
			// //     },
			// //     // called when loading has errors
			// //     function (error) {
			// //         console.log('An error happened');
			// //     }
			// // );

			// const animate = function () {
			//     requestAnimationFrame(animate);

			//     cube.rotation.x += 0.01;
			//     cube.rotation.y += 0.01;

			//     renderer.render(scene, camera);
			// };

			// animate();