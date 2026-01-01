import * as THREE from "three";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Create Scene
const scene = new THREE.Scene();

// Mesh

const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({
  color: "#ff0000",
});
const mesh = new THREE.Mesh(geometry, material);

// Add this mesh to the scene
scene.add(mesh);

const sizes = { width: 600, heigth: 400 };

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.heigth);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({ canvas });
renderer.setSize(sizes.width, sizes.heigth);
renderer.render(scene, camera);

// There are 4 properties to transofrm objects
// - position
// - scale
// - rotation
// - quaternion
// (All classes that inherit from the Object3D class possess those properties like PerspectiveCamera or Mesh.)
