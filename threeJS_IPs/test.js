import * as THREE from 'three';

// import Orbit controls
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer();
renderer.setSize( window.innerWidth, window.innerHeight );
document.body.appendChild( renderer.domElement );

const camera = new THREE.PerspectiveCamera( 90, window.innerWidth / window.innerHeight, 1, 500 );
camera.position.set( 0, 0, 100 );
camera.lookAt( 0, 0, 0 );

const material = new THREE.LineBasicMaterial( { color: 0xFFFFFF } );

const scene = new THREE.Scene();

const points = [];
points.push( new THREE.Vector3( - 15, 0, 0 ) );
points.push( new THREE.Vector3( 0, 20, 0 ) );
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
points3.push( new THREE.Vector3( 0, 20, 0 ) );
points3.push( new THREE.Vector3( 15, 0, 0 ) );
points3.push( new THREE.Vector3( -15, 0, 0 ) );




const geometry = new THREE.BufferGeometry().setFromPoints( points );
const geometry1 = new THREE.BufferGeometry().setFromPoints( points1 );
const geometry2 = new THREE.BufferGeometry().setFromPoints( points2 );
const geometry3 = new THREE.BufferGeometry().setFromPoints( points3 );




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
  

  
	
	 
   line2.rotation.x = -0.8;  
   line1.rotation.x = 0.8; 
   
  
   line3.rotation.y = Math.PI/4*2;
    

  
  

  line.rotation.y = Math.PI/2;

    
  
    
  
    
  
  

   
  
}


var controls = new OrbitControls (camera, renderer.domElement);


animate();
