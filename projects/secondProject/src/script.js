import * as THREE from 'three';

// Creating our object
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red' });
const mesh = new THREE.Mesh(geometry, material);


// Setting position of x, y, z with position.set
// mesh.position.set(0.95, .59, -.5);

// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
// mesh.scale.x = 2;
// mesh.scale.y = 0.25;
// mesh.scale.z = 0.5;
// mesh.rotation.x = Math.PI * 0.25;
// mesh.rotation.y = Math.PI * 0.25;

// scene.add(mesh);

// Setting up the canvas size
const sizes = {
    width: 800,
    height: 600
}

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;

// camera.lookAt(new THREE.Vector3(-.3, -1.75, -3))

const group = new THREE.Group();
group.scale.y = 2;
group.rotation.y = 0.2;
scene.add(group)

const cube1 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xff0000 })
)

cube1.position.x = - 1.5
group.add(cube1)

const cube2 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'yellow' })
)

cube2.position.x = 0
group.add(cube2)

const cube3 = new THREE.Mesh(
    new THREE.BoxGeometry(1, 1, 1),
    new THREE.MeshBasicMaterial({ color: 'green' })
)
cube3.position.x = 1.5
group.add(cube3)

console.log("mesh position (after camera): ", mesh.position.distanceTo(camera.position));
console.log(mesh.position.normalize())
scene.add(camera)

// Render

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);