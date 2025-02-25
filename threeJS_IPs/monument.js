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

const geometry = new THREE.BufferGeometry()
const geometry2 = new THREE.BufferGeometry()
const geometry3 = new THREE.BufferGeometry()
const geometry4 = new THREE.BufferGeometry()

const geometry5 = new THREE.BufferGeometry()
const geometry6 = new THREE.BufferGeometry()
const geometry7 = new THREE.BufferGeometry()
const geometry8 = new THREE.BufferGeometry()

// y - all -1 should be 0, all 1 should be 500
//x - all -1 should be -27 and all 1 should be 27
// z- all 1 should be 27 and all -1 should be -27

// create a simple square shape. We duplicate the top left and bottom right
// vertices because each vertex needs to appear once per triangle.
//yellow
const vertices = new Float32Array([
  -27.5,
  0,
  27.5, // v0
  27.5,
  0,
  27.5, // v1
  17.5,
  500,
  17.5, // v2

  17.5,
  500,
  17.5, // v3
  -17.5,
  500,
  17.5, // v4
  -27.5,
  0,
  27.5, // v5
])

// itemSize = 3 because there are 3 values (components) per vertex
geometry.setAttribute("position", new THREE.BufferAttribute(vertices, 3))
const material = new THREE.MeshBasicMaterial({ color: 0xfff000 })
const mesh1 = new THREE.Mesh(geometry, material)
material.side = THREE.DoubleSide

//-----------------------------------------------

//red
const vertices2 = new Float32Array([
  27.5,
  0,
  -27.5, // v0
  27.5,
  0,
  27.5, // v1
  17.5,
  500,
  17.5, // v2

  17.5,
  500,
  17.5, // v3
  17.5,
  500,
  -17.5, // v4
  27.5,
  0,
  -27.5, // v5
])

// itemSize = 3 because there are 3 values (components) per vertex
geometry2.setAttribute("position", new THREE.BufferAttribute(vertices2, 3))
const material2 = new THREE.MeshBasicMaterial({ color: 0xff0000 })
const mesh2 = new THREE.Mesh(geometry2, material2)
material2.side = THREE.DoubleSide

//--------------------------------------------------------

//white
const vertices3 = new Float32Array([
  -27.5,
  0,
  -27.5, // v0
  27.5,
  0,
  -27.5, // v1
  17.5,
  500,
  -17.5, // v2

  17.5,
  500,
  -17.5, // v3
  -17.5,
  500,
  -17.5, // v4
  -27.5,
  0,
  -27.5, // v5
])

geometry3.setAttribute("position", new THREE.BufferAttribute(vertices3, 3))
const material3 = new THREE.MeshBasicMaterial({ color: "blue" })
const mesh3 = new THREE.Mesh(geometry3, material3)
material3.side = THREE.DoubleSide

//---------------------------------------------------------------

//blue
const vertices4 = new Float32Array([
  -27.5,
  0,
  -27.5, // v0
  -27.5,
  0,
  27.5, // v1
  -17.5,
  500,
  17.5, // v2

  -17.5,
  500,
  17.5, // v3
  -17.5,
  500,
  -17.5, // v4
  -27.5,
  0,
  -27.5, // v5
])

geometry4.setAttribute("position", new THREE.BufferAttribute(vertices4, 3))
const material4 = new THREE.MeshBasicMaterial({ color: "rgb(100,150,200)" })
const mesh4 = new THREE.Mesh(geometry4, material4)
material4.side = THREE.DoubleSide

//---------------------------------------------------------------

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
  scene.add(mesh1)
  scene.add(mesh2)
  scene.add(mesh3) //white
  scene.add(mesh4) //blue

  mesh1.position.set(2, 0, 0) //yellow
  mesh2.position.set(2, 0, 0) //red
  mesh3.position.set(2, 0, 0) //white
  mesh4.position.set(2, 0, 0) //blue
  triangle1.position.set(2, 500, 0)
  triangle2.position.set(2, 500, 0)
  triangle3.position.set(2, 500, 0)
  triangle4.position.set(2, 500, 0)

  //mesh3.rotation.y = 1.5;

  mesh4.rotation.y += 0.05 //blue
  mesh3.rotation.y += 0.05 //white
  mesh2.rotation.y += 0.05 //red
  mesh1.rotation.y += 0.05 //rellow

  //triangle
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
