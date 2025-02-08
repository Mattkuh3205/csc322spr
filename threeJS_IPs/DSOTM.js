import * as THREE from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';

const renderer = new THREE.WebGLRenderer()
renderer.setSize(window.innerWidth, window.innerHeight)
document.body.appendChild(renderer.domElement)

const camera = new THREE.PerspectiveCamera(
  125,
  window.innerWidth / window.innerHeight,
  .1,
  900,
)
camera.position.set(500, 500, 100)
camera.lookAt(0, 10, 50)

const scene = new THREE.Scene()
scene.background = new THREE.Color( "rgb(200, 179, 104)"); //for fun

const geometry5 = new THREE.BufferGeometry()
const geometry6 = new THREE.BufferGeometry()
const geometry7 = new THREE.BufferGeometry()
const geometry8 = new THREE.BufferGeometry()

//TRIANGLE
const vertices5 = new Float32Array([
  -17.5,
  0,
  17.5, // v0
  17.5,
  0,
  17.5, // v1
  0,
  55,
  0, // v2
  0,
  1,
  0, // v2
])

geometry5.setAttribute("position", new THREE.BufferAttribute(vertices5, 3))
const material5 = new THREE.MeshBasicMaterial({ color: 0x0fff00 })
const triangle1 = new THREE.Mesh(geometry5, material5)
material5.side = THREE.DoubleSide

//--------------------------------------------------------------------

const vertices6 = new Float32Array([
  17.5,
  0,
  -17.5, // v0
  17.5,
  0,
  17.5, // v1
  0,
  55,
  0, // v2
  0,
  1,
  0, // v2
])

geometry6.setAttribute("position", new THREE.BufferAttribute(vertices6, 3))
const material6 = new THREE.MeshBasicMaterial({ color: "rgb(0,0,230)" })
const triangle2 = new THREE.Mesh(geometry6, material6)
material6.side = THREE.DoubleSide

const vertices7 = new Float32Array([
  -17.5,
  0,
  -17.5, // v0
  -17.5,
  0,
  17.5, // v1
  0,
  55,
  0, // v2
  0,
  1,
  0, // v2
])

geometry7.setAttribute("position", new THREE.BufferAttribute(vertices7, 3))
const material7 = new THREE.MeshBasicMaterial({ color: 0xffffff })
const triangle3 = new THREE.Mesh(geometry7, material7)
material7.side = THREE.DoubleSide

//--------------------------------------------------------------------

const vertices8 = new Float32Array([
  -17.5,
  0,
  -17.5, // v0
  17.5,
  0,
  -17.5, // v1
  0,
  55,
  0, // v2
  0,
  1,
  0, // v2
])

geometry8.setAttribute("position", new THREE.BufferAttribute(vertices8, 3))
const material8 = new THREE.MeshBasicMaterial({ color: 0xff00ff })
const triangle4 = new THREE.Mesh(geometry8, material8)
material8.side = THREE.DoubleSide


renderer.render(scene, camera)

function animate() {
renderer.render(scene, camera)

 scene.add(triangle1)
  scene.add(triangle2)
  scene.add(triangle3)
  scene.add(triangle4)
  triangle1.rotation.y += 0.05
  triangle2.rotation.y += 0.05
  triangle3.rotation.y += 0.05
  triangle4.rotation.y += 0.05

  requestAnimationFrame(animate)
}

var controls = new OrbitControls(camera, renderer.domElement)

animate()
