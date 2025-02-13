import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
  90,
  window.innerWidth / window.innerHeight,
  .1,
  900,
)
camera.position.set(500, 500,900)
camera.lookAt(0, 0, 0)

// Create OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true; // Adds smooth motion
controls.dampingFactor = 0.05;
controls.screenSpacePanning = false;
controls.minDistance = 10;
controls.maxDistance = 200;

//---------------------------------------------------------

// Create scene
const scene = new THREE.Scene();

//----------------------------------------------------------

/*
Modify the provided Threejs code from Lecture 7 (which draws a circle) in 
JSFiddle to visualize the implicit equation. 
f(x, y) = (x^2 + y^2)^2 − 2^2(x^2 − y^2) = 0
*/


// Create a circle
const circleMaterial = new THREE.LineBasicMaterial({ color: 0xff0000 });
const circlePoints = [-75,50];
const radius = 35; // Circle radius
const segments =100; // Number of segments to approximate the circle
for (let i = 0; i <= segments; i++) { //i = arc length (angle in radians)
const theta = (i / segments) * 2* Math.PI; //

const x = (radius*Math.cos(theta));

const y = (radius *Math.sin(theta)); //theta *2 gives us infinity

circlePoints.push(new THREE.Vector3(x,y,0)); //x*2 gives a regular symbol
//circlePoints.push(new THREE.Vector3(circlePoints[-50,50])); //x*2 gives a regular symbol

function f(x,y){
  return (x*x^2)
}


}



const circleGeometry = new THREE.BufferGeometry().setFromPoints(circlePoints);
const circle = new THREE.Line(circleGeometry, circleMaterial);

scene.add(circle)


//-------------------------------------------------------------------------------------

/* // Create a circle
const circleMaterial1 = new THREE.LineBasicMaterial({ color: 0xff0000 });
const circlePoints1 = [];
const radius1 = 15; // Circle radius
const segments1 = 3; // Number of segments to approximate the circle
for (let i = 0; i <= segments1; i++) { //i = arc length (angle in radians)
const theta1 = (i / segments1) * 2* Math.PI; //
//const x1 = (radius)^2 *(Math.cos)^2*(theta);
const x1 = (radius1)^2*(Math.cos)^2*(theta1);
//const x = (radius)^2 *(Math.cos)^2*(theta);
const y1 = radius1 * (Math.sin)(theta1); //theta *2 gives us infinity



circlePoints1.push(new THREE.Vector3(x1,y1,0));

}



const circleGeometry1 = new THREE.BufferGeometry().setFromPoints(circlePoints1);
const circle1 = new THREE.Line(circleGeometry1, circleMaterial1);

scene.add(circle1) */

// Animation loop for rendering and controls update
function animate() {
requestAnimationFrame(animate);
controls.update(); // Required for damping to work
renderer.render(scene, camera);

circle.position.set(-18,0,0)
//circle1.rotation.y = 3.141
//circle.rotation.y += 0.05


}
// Start the animation loop
animate()