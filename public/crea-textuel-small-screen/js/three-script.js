


    let scene = new THREE.Scene(),
    renderer = window.WebGLRenderingContext ? new THREE.WebGLRenderer() : new THREE.CanvasRenderer(),
    light = new THREE.AmbientLight(0xffffff),
    camera,
    box;

   const initScene = () => {
       renderer.setSize( 500 , 500);
       document.getElementById('container').appendChild(renderer.domElement);
       scene.add(light)

       camera = new THREE.PerspectiveCamera(35, 500/500, 1, 1000)
       camera.position.z = 100;
       scene.add(camera)

       box = new THREE.Mesh(
           new THREE.BoxGeometry(20,20,20),
           new THREE.MeshBasicMaterial({color: 0xFF0000})
       )
    
       box.name = "box";
       scene.add(box)

       render();

   }

   const render = () => {
       box.rotation.y += 0.01;
       renderer.render(scene, camera);
       requestAnimationFrame(render);

   }

   window.onload = initScene;



