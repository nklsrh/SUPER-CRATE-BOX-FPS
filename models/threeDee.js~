var container, stats;

var camera, scene, renderer, objects;
var particleLight, pointLight;
var dae, skin;

//var texture = THREE.ImageUtils.loadTexture( 'textures/ash_uvgrid01.jpg' );


function SetupThree() {

container = document.getElementById ('gameCanvas');

scene = new THREE.Scene();

camera = new THREE.PerspectiveCamera( 45, 600/240, 1, 2000 );
camera.position.set( 2, 2, 3 );
scene.add( camera );

var loader = new THREE.OBJLoader();
loader.load( "./models/env/redblock.obj", function ( object ) {

	for ( var i = 0, l = object.children.length; i < l; i ++ ) {

		//object.children[ i ].material.map = texture;

	}

	object.position.y = - 80;
	scene.add( object );
  animate();
} );

// Grid

var line_material = new THREE.LineBasicMaterial( { color: 0xcccccc, opacity: 0.2 } ),
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

particleLight = new THREE.Mesh( new THREE.SphereGeometry( 4, 8, 8 ), new THREE.MeshBasicMaterial( { color: 0xffffff } ) );
scene.add( particleLight );

// Lights

scene.add( new THREE.AmbientLight( 0xcccccc ) );


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
