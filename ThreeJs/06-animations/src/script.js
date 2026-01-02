import * as THREE from "three";
import gsap from "gsap";

// Canvas
const canvas = document.querySelector("canvas.webgl");

// Scene
const scene = new THREE.Scene();

// Object
const geometry = new THREE.BoxGeometry(1, 1, 1);
const material = new THREE.MeshBasicMaterial({ color: 0xff0000 });
const mesh = new THREE.Mesh(geometry, material);
scene.add(mesh);

// Sizes
const sizes = {
  width: 800,
  height: 600,
};

// Camera
const camera = new THREE.PerspectiveCamera(75, sizes.width / sizes.height);
camera.position.z = 3;
scene.add(camera);

// Renderer
const renderer = new THREE.WebGLRenderer({
  canvas: canvas,
});
renderer.setSize(sizes.width, sizes.height);
// renderer.render(scene, camera);

let time = Date.now();

// Animation
// const tick = () => {
//   //  Time
//   const currentTime = Date.now();
//   const deltaTime = currentTime - time;
//   time = currentTime;

//   // Update Object
//   mesh.rotation.x += 0.001 * deltaTime;
//   // mesh.position.z += 0.001;

//   // Render
//   renderer.render(scene, camera);

//   window.requestAnimationFrame(tick);
// };

gsap.to(mesh.position, { x: 2, delay: 1, duration: 2, ease: "power3.inOut" });

// Clock
// const clock = new THREE.Clock();
// Animation
const tick = () => {
  //   const elapsedTime = clock.getElapsedTime();

  // update objects
  //   camera.position.y = Math.sin(elapsedTime);
  //   camera.position.x = Math.cos(elapsedTime);
  //   camera.lookAt(mesh.position);

  // Render
  renderer.render(scene, camera);
  window.requestAnimationFrame(tick);
};

tick();
