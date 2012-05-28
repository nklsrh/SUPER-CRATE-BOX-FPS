var container, stats;

var camera, scene, renderer, objects;
var particleLight, pointLight;
var dae, skin;

var loader = new THREE.ColladaLoader();
loader.options.convertUpAxis = true;
loader.load( './models/env/redblock.dae', function colladaReady( collada ) {

dae = collada.scene;
skin = collada.skins[ 0 ];
dae.dynamic = true;
dae.scale.x = dae.scale.y = dae.scale.z = 1;
dae.updateMatrix();

init();
animate();

} );

function SetupThree(){}
function init() {

container = document.getElementById ('gameCanvas');

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 45, 600/240, 1, 2000 );
camera.position.set( 2, 2, 3 );
scene.add( camera );

// Grid

var line_material = new THREE.LineBasicMaterial( { color: 0x000000, opacity: 0.2 } ),
	geometry = new THREE.Geometry(),
	floor = -0.04, step = 1, size = 14;

for ( var i = 0; i <= size / step * 2; i ++ ) {

	geometry.vertices.push( new THREE.Vector3( - size, floor, i * step - size ) );
	geometry.vertices.push( new THREE.Vector3(   size, floor, i * step - size ) );

	geometry.vertices.push( new THREE.Vector3( i * step - size, floor, -size ) );
	geometry.vertices.push( new THREE.Vector3( i * step - size, floor,  size ) );

}

var line = new THREE.Line( geometry, line_material, THREE.LinePieces );
scene.add( line );

// Add the COLLADA

scene.add( dae );

var ambient = new THREE.AmbientLight( 0xffffff);
scene.add( ambient );

var pointLight = new THREE.PointLight ( 0xffffff );
pointLight.position.x = 400;
pointLight.position.y = 100;
pointLight.position.z = 110;
pointLight.intensity = 3;
scene.add (pointLight);

var pointLight2 = new THREE.PointLight ( 0xffffff );
pointLight2.position.x = -10;
pointLight2.position.y = 1000;
pointLight2.position.z = -110;
scene.add (pointLight2);

particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
scene.add( particleLight );

renderer = new THREE.WebGLRenderer();
renderer.setSize( 600, 240 );

container.appendChild( renderer.domElement );
}

//

var t = 0;
function animate() {

requestAnimationFrame( animate );

render();

}

function render() {

var timer = Date.now() * 0.0005;

camera.position.x = Math.cos( timer ) * 10;
camera.position.y = 2;
camera.position.z = Math.sin( timer ) * 10;

camera.lookAt( scene.position );

particleLight.position.x = Math.sin( timer * 4 ) * 3009;
particleLight.position.y = Math.cos( timer * 5 ) * 4000;
particleLight.position.z = Math.cos( timer * 4 ) * 3009;

renderer.render( scene, camera );

}
