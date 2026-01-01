import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

/**
 * Objects
 */
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: 0xff0000,
});
const mesh = new THREE.Mesh(geometry, material);

// ! Position
// mesh.position.x = 0.7;
// mesh.position.y = -0.6;
// mesh.position.z = 1;
mesh.position.set(0.7, -0.6, 1);

// mesh.position.normalize();
// console.log(mesh.position.length());

scene.add(mesh);

// ! Scale
// mesh.scale.x = 1.4;
// mesh.scale.y = 0.5;
// mesh.scale.z = 0.5;
mesh.scale.set(1.4, 0.5, 0.5);

// ! Rotation
mesh.rotation.reorder("YXZ");
mesh.rotation.x = Math.PI * 0.25;
mesh.rotation.y = Math.PI * 0.25;

// ! Axes Helper
const axesHelper = new THREE.AxesHelper(2);
scene.add(axesHelper); // add it to the scene

/**
 * Sizes
 */
const sizes = {
  width: 800,
  height: 600,
};

/**
 * Camera
 */
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

camera.lookAt(mesh.position);

// console.log(mesh.position.distanceTo(camera.position)); // distance between camera & the mesh

/**
 * Renderer
 */
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
renderer.render(scene, camera);
