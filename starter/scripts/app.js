import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'

const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 25, 25, 25)
const cubeMaterial = new THREE.MeshBasicMaterial({
	// color: 'red'
	color: "#519aba"
})
const cubeMaterial2 = new THREE.MeshBasicMaterial({
	color: '#234223',
	wireframe: true
})
const cubeMaterial3 = new THREE.MeshBasicMaterial({
	color: 'green'
})

const cubeMesh = new THREE.Mesh(cubeGeometry, cubeMaterial)

// cubeMesh.position.x = 1
// cubeMesh.position.y = 1
// cubeMesh.position.z = 1

// cubeMesh.position.set(1, .5, 1)
// cubeMesh.position.fromArray([1, .5, 1])

const tempVector = new THREE.Vector3(0, 0, 0)
cubeMesh.position.copy(tempVector)

// cubeMesh.scale.y = 2

const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial2)
cubeMesh2.position.x = 2
cubeMesh2.scale.setScalar(.75)

const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial3)
cubeMesh3.position.x = -2
cubeMesh3.scale.setScalar(1.25)
cubeMesh3.rotation.y = .75

const sceneGroup = new THREE.Group()

sceneGroup.add(cubeMesh, cubeMesh2, cubeMesh3)

scene.add(sceneGroup)
// sceneGroup.rotation.y = Math.PI
sceneGroup.rotation.y = THREE.MathUtils.degToRad(-45)




const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

const gridHelper = new THREE.GridHelper(100, 100)
scene.add(gridHelper)
gridHelper.position.set(.5, 0, .5)



const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	.1,
	30
)

camera.position.z = 3

scene.add(camera)

const canvas = document.querySelector(".threejs")

const renderer = new THREE.WebGLRenderer({
	canvas: canvas,
	antialias: true
})

renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2))

renderer.setSize(window.innerWidth, window.innerHeight)

const controls = new OrbitControls(camera, canvas)
controls.enableDamping = true
// controls.autoRotate = true

const animate = () => {
	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(animate)
}
animate()

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.updateProjectionMatrix()
})





