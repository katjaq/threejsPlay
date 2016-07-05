
/**** CREATING THE SCENE ****/
// using PerspectiveCamera: first attribute: field of view; second attribute: aspect ratio. 
// Third & fourth attributes are the near and far clipping plane (i.e. objects further away from the camera than 
// the value of far or closer than near won't be rendered)
var scene = new THREE.Scene();
var camera = new THREE.PerspectiveCamera( 75, window.innerWidth / window.innerHeight, 0.1, 1000 );


/**** CREATING RENDERER INSTANCE ****/
var renderer = new THREE.WebGLRenderer();
// set renderer size
renderer.setSize( window.innerWidth, window.innerHeight );
// add renderer element to HTML document, i.e. a <canvas> element the renderer uses to display the scene
document.body.appendChild( renderer.domElement );


/**** CREATING THE CUBE ****/
var geometry = new THREE.BoxGeometry( 1, 1, 1 );
var material = new THREE.MeshBasicMaterial( { color: 0x00ff00 } );
// mesh is an object that takes a geometry, and applies a material to it, which can then be inserted to the scene, 
// and move freely around
var cube = new THREE.Mesh( geometry, material );
scene.add( cube );
// by default, scene.add() adds the thing to the coordinates (0,0,0). This would cause both the camera and the cube 
// to be inside each other. To avoid this, we simply move the camera out a bit.
camera.position.z = 5;

/**** CREATE RENDER LOOP TO RENDER THE SCENE ****/
// loop that causes the renderer to draw the scene 60 times per second
function render() {
	requestAnimationFrame( render );
	// to rotate the cube
	cube.rotation.x += 0.01;
	cube.rotation.y += 0.01;

	renderer.render( scene, camera );
}
render();