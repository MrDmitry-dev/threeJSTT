import './style.css'
import * as THREE from 'three'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js';

const loader = new GLTFLoader();

const scene = new THREE.Scene();
scene.background = new THREE.Color(0x6baaf8);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.7, 1000);



const renderer = new THREE.WebGLRenderer();
renderer.setSize(window.innerWidth / 2, window.innerHeight / 2);
document.body.appendChild(renderer.domElement);

// const geometry = new THREE.BoxGeometry();
// const material = new THREE.MeshBasicMaterial({ color: 0xFFFFFF
// });
// const cube = new THREE.Mesh(geometry, material);
// scene.add(cube);

let room

loader.load('./models/squareRoom.glb', function (gltf) {
	scene.add(gltf.scene);
	gltf.scene.scale.set(10, 10, 10);
}, undefined, function (error) {
	console.error(error);
});

camera.position.z = 5;

function animate() {
	requestAnimationFrame(animate);
	// scene.children[0].scale
	// scene.scale = {x:3,y:3,z:3}
	// scene.children[0].rotation.x += 0.01;
	scene.rotation.y += 0.01;

	renderer.render(scene, camera);
};

animate();

