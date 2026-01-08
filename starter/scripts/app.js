import * as THREE from 'three'
import { OrbitControls } from 'three/addons/controls/OrbitControls.js'
import { Pane } from '../vendor/tweakpane/dist/tweakpane.js'

const devMode = true


const scene = new THREE.Scene()

const cubeGeometry = new THREE.BoxGeometry(1, 1, 1, 25, 25, 25)

const cubeMaterial = new THREE.MeshBasicMaterial({
	// color: 'red'
	color: "#519aba"
})

const cubeMaterial2 = new THREE.MeshBasicMaterial({
	color: 'blue'
})

const cubeMaterial3 = new THREE.MeshBasicMaterial({
	color: 'green'
})

// const material = new THREE.MeshLambertMaterial({
// 	color: 'limeGreen',
// 	transparent: true,
// 	opacity: 0.5
// })
const material = new THREE.MeshPhongMaterial({
	color: 'limeGreen',
	// transparent: true,
	// opacity: 0.5
})
material.shininess = 2000

const standartMaterial = new THREE.MeshStandardMaterial()
standartMaterial.color = new THREE.Color('limegreen')
standartMaterial.roughness = 0.65
standartMaterial.metalness = 0.65

// Работа с текстурами

const textureLoader = new THREE.TextureLoader()

const textureGrass = textureLoader.load('./textures/grass/wispy-grass-meadow_albedo.png')

const materialGrass = new THREE.MeshStandardMaterial()
materialGrass.map = textureGrass



// ===============================

const cubeMesh = new THREE.Mesh(cubeGeometry, material)

// cubeMesh.position.x = 1
// cubeMesh.position.y = 1
// cubeMesh.position.z = 1

// cubeMesh.position.set(1, .5, 1)
// cubeMesh.position.fromArray([1, .5, 1])

const tempVector = new THREE.Vector3(0, 0, 0)
cubeMesh.position.copy(tempVector)

// cubeMesh.scale.y = 2

// const cubeMesh2 = new THREE.Mesh(cubeGeometry, cubeMaterial2)
const cubeMesh2 = new THREE.Mesh(cubeGeometry, material)
cubeMesh2.position.x = 2
// cubeMesh2.scale.setScalar(.75)

const cubeMesh3 = new THREE.Mesh(cubeGeometry, cubeMaterial3)
cubeMesh3.position.x = -2
cubeMesh3.scale.setScalar(1.25)
cubeMesh3.rotation.y = .75

const geometry = new THREE.SphereGeometry(1, 32, 64)
const geometryMesh = new THREE.Mesh(geometry, material)

const torusKnot = new THREE.TorusKnotGeometry(.5, .15, 100, 16)
// const torusKnotMesh = new THREE.Mesh(torusKnot, material)
const torusKnotMesh = new THREE.Mesh(torusKnot, standartMaterial)
torusKnotMesh.position.x = -2

const sphereGeometry = new THREE.SphereGeometry(1, 64, 64)
const sphereMesh = new THREE.Mesh(sphereGeometry, materialGrass)

const sceneGroup = new THREE.Group()

sceneGroup.add(cubeMesh2, torusKnotMesh, sphereMesh)

scene.add(sceneGroup)
// sceneGroup.rotation.y = Math.PI
sceneGroup.rotation.y = THREE.MathUtils.degToRad(45)

const fog = new THREE.Fog('#000', 2, 4) // тень
scene.fog = fog

const light = new THREE.AmbientLight('#fff', .15) // освещение
scene.add(light)

const pointLight = new THREE.PointLight('#fff', 4) // источник света
pointLight.position.set(1.7, .7, 0)
scene.add(pointLight)

const pointLightHelper = new THREE.PointLightHelper(pointLight, .1)
scene.add(pointLightHelper)

// document.addEventListener('mousemove', (e) => {
// 	pointLight.position.set(e.pageX / 50, e.pageY / 50, 0)
// })

const axesHelper = new THREE.AxesHelper(3)
scene.add(axesHelper)

const gridHelper = new THREE.GridHelper(10, 10)
scene.add(gridHelper)
gridHelper.position.set(.5, 0, .5)



const camera = new THREE.PerspectiveCamera(
	75,
	window.innerWidth / window.innerHeight,
	.1,
	30
)

camera.position.x = 1
camera.position.y = 1
camera.position.z = 2

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
const clock = new THREE.Clock()

const animate = () => {
	const elapsedTime = clock.getElapsedTime()

	// cubeMesh.position.z = Math.sin(elapsedTime) //Движение по синусоиде

	controls.update()
	renderer.render(scene, camera)
	window.requestAnimationFrame(animate)

	
	// sceneGroup.rotation.y += THREE.MathUtils.degToRad(.25)
	
	// geometryMesh.rotation.y -= THREE.MathUtils.degToRad(.25)

	// pointLight.position.z = Math.sin(elapsedTime * 1)
}
animate()

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.updateProjectionMatrix()
})

// Финальная очистка
if (devMode) {
	const pane = new Pane()
	// pane.addBinding(material, 'shininess', { min: 0, max: 4000 })
	pane.addBinding(standartMaterial, 'metalness', { min: 0, max: 1 })
	pane.addBinding(standartMaterial, 'roughness', { min: 0, max: 1 })
}
else {
	scene.remove(
	axesHelper,
	gridHelper,
	pointLightHelper,
)}


// Dev mode

