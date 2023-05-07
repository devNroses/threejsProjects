import * as THREE from 'three';

// Creating our object
const scene = new THREE.Scene();
const geometry = new THREE.BoxGeometry(1, 1, 1)
const material = new THREE.MeshBasicMaterial({ color: 'red'});
const mesh = new THREE.Mesh(geometry, material);

mesh.position.x = 0.95;
mesh.position.y = .59;
mesh.position.z = -.5;

console.log("mesh lenght: ", mesh.position.length());

scene.add(mesh);

// Setting up the canvas size
const sizes = {
    width: 800,
    height: 600
}

// Camera

const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height)
camera.position.z = 3;

console.log("mesh position (after camera): ", mesh.position.distanceTo(camera.position));
console.log(mesh.position.normalize())
scene.add(camera)

// Render

const renderer = new THREE.WebGLRenderer({
    canvas: document.querySelector('canvas.webgl')
});

renderer.setSize(sizes.width, sizes.height);

renderer.render(scene, camera);