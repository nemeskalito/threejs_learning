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

// Тексутра травы

const textureGrass = textureLoader.load('./textures/grass/wispy-grass-meadow_albedo.png')
const textureGrassAO = textureLoader.load('./textures/grass/wispy-grass-meadow_ao.png')
const textureGrassHeight = textureLoader.load('./textures/grass/wispy-grass-meadow_height.png')
const textureGrassMetallic = textureLoader.load('./textures/grass/wispy-grass-meadow_metallic.png')
const textureGrassNormal = textureLoader.load('./textures/grass/wispy-grass-meadow_normal-ogl.png')
const textureGrassRoughness = textureLoader.load('./textures/grass/wispy-grass-meadow_roughness.png')

const materialGrass = new THREE.MeshStandardMaterial()
materialGrass.map = textureGrass
materialGrass.aoMap = textureGrassAO
materialGrass.roughnessMap = textureGrassRoughness
materialGrass.metalnessMap = textureGrassMetallic
materialGrass.normalMap = textureGrassNormal
materialGrass.displacementMap = textureGrassHeight

materialGrass.displacementScale = .15
materialGrass.roughness = .35

// Текстура камня

const textureRocky = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_albedo.png')
const textureRockyAO = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_ao.png')
const textureRockyHeight = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_height.png')
const textureRockyMetallic = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_metallic.png')
const textureRockyNormal = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_normal-ogl.png')
const textureRockyRoughness = textureLoader.load('./textures/brick/rocky-rugged-terrain_1_roughness.png')

const materialRocky = new THREE.MeshStandardMaterial()
materialRocky.map = textureRocky
materialRocky.aoMap = textureRockyAO
materialRocky.roughnessMap = textureRockyRoughness
materialRocky.metalnessMap = textureRockyMetallic
materialRocky.normalMap = textureRockyNormal
materialRocky.displacementMap = textureRockyHeight

materialRocky.displacementScale = .125
materialRocky.roughness = .45

// Текстура кирпичей

const textureBrick = textureLoader.load('./textures/brick/victorian-brick_albedo.png')
const textureBrickAO = textureLoader.load('./textures/brick/victorian-brick_ao.png')
const textureBrickHeight = textureLoader.load('./textures/brick/victorian-brick_height.png')
const textureBrickMetallic = textureLoader.load('./textures/brick/victorian-brick_metallic.png')
const textureBrickNormal = textureLoader.load('./textures/brick/victorian-brick_normal-ogl.png')
const textureBrickRoughness = textureLoader.load('./textures/brick/victorian-brick_roughness.png')

const materialBrick = new THREE.MeshStandardMaterial()
materialBrick.map = textureBrick
materialBrick.aoMap = textureBrickAO
materialBrick.roughnessMap = textureBrickRoughness
materialBrick.metalnessMap = textureBrickMetallic
materialBrick.normalMap = textureBrickNormal
materialBrick.displacementMap = textureBrickHeight

materialBrick.displacementScale = .25
materialBrick.roughness = .65
// ===============================
// Текстура земля

const textureEarth = textureLoader.load('./textures/earth/earthmap1k.jpg')
const textureEarthAO = textureLoader.load('./textures/earth/earthbump1k.jpg')

const materialEarth = new THREE.MeshStandardMaterial()
materialEarth.map = textureEarth
materialEarth.aoMap = textureEarthAO

materialEarth.displacementScale = .01
materialEarth.roughness = .65
// ===============================
// Текстура луны

const textureMoon = textureLoader.load('./textures/moon/moonmap4k.jpg')
const textureMoonAO = textureLoader.load('./textures/moon/moonbump4k.jpg')

const materialMoon = new THREE.MeshStandardMaterial()
materialMoon.map = textureMoon
materialMoon.aoMap = textureMoonAO

materialMoon.displacementScale = .01
materialMoon.roughness = .65
// ===============================
// Текстура солнца

const textureSun = textureLoader.load('./textures/sun/sunmap.jpg')

const materialSun = new THREE.MeshStandardMaterial()
materialSun.map = textureSun

materialSun.displacementScale = .01
materialSun.roughness = .65
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

// Тени для приемника
torusKnotMesh.castShadow = true // Отбрасывает тень
torusKnotMesh.receiveShadow = true // Принимает тень

const sphereGeometry = new THREE.SphereGeometry(1, 64, 64)
const sphereMesh = new THREE.Mesh(sphereGeometry, materialEarth)

const sceneGroup = new THREE.Group()

sceneGroup.add(cubeMesh2, torusKnotMesh, sphereMesh)

scene.add(sceneGroup)
// sceneGroup.rotation.y = Math.PI
sceneGroup.rotation.y = THREE.MathUtils.degToRad(45)

const fog = new THREE.Fog('#000', 2, 4) // тень
scene.fog = fog

const light = new THREE.AmbientLight('#fff', .5) // освещение
scene.add(light)

const pointLight = new THREE.PointLight('#fff', 2) // источник света
pointLight.position.set(1.7, .7, 0)
// Тени для источника
pointLight.castShadow = true
pointLight.shadow.mapSize.width = 2048
pointLight.shadow.mapSize.height = 2048
pointLight.shadow.camera.far = 500
pointLight.shadow.radius = 30


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

// Тени для рендера
renderer.shadowMap.enabled = true
renderer.shadowMap.type = THREE.PCFShadowMap

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

	pointLight.position.z = Math.sin(elapsedTime * 1)
}
animate()

window.addEventListener("resize", () => {
	camera.aspect = window.innerWidth / window.innerHeight
	renderer.setSize(window.innerWidth, window.innerHeight)
	camera.updateProjectionMatrix()
})

const raycaster = new THREE.Raycaster()
const mouse = new THREE.Vector2()
let isDraggingKnot = false

canvas.addEventListener('mousedown', (e) => {
	if (e.button !== 0) return
	mouse.x = (e.clientX / window.innerWidth )* 2 - 1
	mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
	raycaster.setFromCamera(mouse, camera)
	isDraggingKnot = raycaster.intersectObject(torusKnotMesh).length > 0
})

canvas.addEventListener('mouseup', () => {
	isDraggingKnot = false
})

canvas.addEventListener('mousemove', (e) => {
	mouse.x = (e.clientX / window.innerWidth )* 2 - 1
	mouse.y = -(e.clientY / window.innerHeight) * 2 + 1
	raycaster.setFromCamera(mouse, camera)

	controls.enabled = !isDraggingKnot

	if (isDraggingKnot && e.buttons === 1) {
		torusKnotMesh.rotation.y += e.movementX * .01
		torusKnotMesh.rotation.x += e.movementY * .01
	}
})


// Dev mode
if (devMode) {
	const pane = new Pane()
	// pane.addBinding(material, 'shininess', { min: 0, max: 4000 })
	pane.addBinding(standartMaterial, 'metalness', { min: 0, max: 1 })
	pane.addBinding(standartMaterial, 'roughness', { min: 0, max: 1 })

	pane.addBinding(textureGrass, 'offset', {
		x: { min: -1, max: 1 },
		y: { min: -1, max: 1 },
	})
	
	pane.addBinding(materialBrick, 'roughness', { min: 0, max: 1 })
}
else {
	scene.remove(
	axesHelper,
	gridHelper,
	pointLightHelper,
)}


// Dev mode

