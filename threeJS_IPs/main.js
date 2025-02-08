import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const w = window.innerWidth;
const h = window.innerHeight;

// Create scene, camera, renderer
const scene = new THREE.Scene();
const camera = new THREE.PerspectiveCamera(90, w / h, 0.1, 800);
const renderer = new THREE.WebGLRenderer();
renderer.setSize(w, h);
document.body.appendChild(renderer.domElement);

// Add OrbitControls
const controls = new OrbitControls(camera, renderer.domElement);
camera.position.z = 75; // Set camera position
camera.position.y = 35;

const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );


const points = [];
points.push( new THREE.Vector3( - 15, 0, 0 ) );
points.push( new THREE.Vector3( 0, 0, 0 ) );
points.push( new THREE.Vector3( 15, 0, 0 ) );
points.push( new THREE.Vector4( -15, 0, 0 ) );

const points1 = [];
points1.push( new THREE.Vector3( -15, 0, 0 ) );
points1.push( new THREE.Vector3( 0, 20, 0 ) );
points1.push( new THREE.Vector3( 15, 0, 0 ) );
points1.push( new THREE.Vector4( -15, 0, 0 ) );

const points2 = [];
points2.push( new THREE.Vector3( -15, 0, 0 ) );
points2.push( new THREE.Vector3( 0, 20, 0 ) );
points2.push( new THREE.Vector3( 15, 0, 0 ) );
points2.push( new THREE.Vector3( -15, 0, 0 ) );

const points3 = [];
points3.push( new THREE.Vector3( -15, 0, 0 ) );
points3.push( new THREE.Vector3( 0, 0, 0 ) );
points3.push( new THREE.Vector3( 15, 0, 0 ) );
points3.push( new THREE.Vector3( -15, 0, 0 ) );




const geometry = new THREE.BoxGeometry().setFromPoints( points );
const geometry1 = new THREE.BoxGeometry().setFromPoints( points1 );
const geometry2 = new THREE.BoxGeometry().setFromPoints( points2 );
const geometry3 = new THREE.BoxGeometry().setFromPoints( points3 );




const line = new THREE.Line( geometry, material );
const line1 = new THREE.Line( geometry1, material );
const line2 = new THREE.Line( geometry2, material );
const line3 = new THREE.Line( geometry3, material );






scene.add( line );
scene.add( line1 );
scene.add( line2 );
scene.add(line3);


line2.position.set(0,0,10); // 1

line.position.set(-15,0,-5); //2
line1.position.set(0,0,-19); //3


line3.position.set(15,0,-5);




renderer.render( scene, camera );

function animate() {
  renderer.render(scene, camera)
  
  requestAnimationFrame(animate);
  

  
	
	 
   
  
    
  
    
  
  

   
  
}




animate();
