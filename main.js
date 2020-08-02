const scene = new THREE.Scene();
scene.background = new THREE.Color(0xffffff);

const camera = new THREE.PerspectiveCamera(75, window.innerWidth / window.innerHeight, 0.1, 1000);
// var width = window.innerWidth, height = window.innerHeight;
// const camera = new THREE.OrthographicCamera( width / - 2, width / 2, height / 2, height / - 2, 1, 1000 );

const renderer = new THREE.WebGLRenderer({ antialias: true });
renderer.setSize(window.innerWidth, window.innerHeight);
document.body.appendChild(renderer.domElement);

var geometry = new THREE.BoxGeometry(40, 40, 40,);
// var material = new THREE.MeshBasicMaterial({ color: 0xFF0000 });
var material = new THREE.MeshPhongMaterial({ color: 0xFF0000 });

renderer.shadowMap.enabled = true;
renderer.shadowMap.type = THREE.BasicShadowMap;

ambientLight = new THREE.AmbientLight(0xffffff, 0.15);
scene.add(ambientLight);

light = new THREE.PointLight(0xffffff, 1, 0);
light.position.set(150, 150, 150);
light.castShadow = true;
// Will not light anything closer than 0.1 units or further than 25 units
light.shadow.camera.near = 0.1;
light.shadow.camera.far = 1000;
scene.add(light);

camera.position.z = 150;

var cubes = [];

var cursorX = window.innerWidth / 2;
var cursorY = window.innerHeight / 2;
document.onmousemove = function(e){
    cursorX = e.pageX;
    cursorY = e.pageY;
}

// for (let i = -2; i < 3; i++) {
//     let cube = new THREE.Mesh(geometry, material);
//     cube.position.x += i * 70;
//     cube.receiveShadow = true;
//     cube.castShadow = false;

//     cubes.push(cube);
//     scene.add(cube);
// }

// geometry = new THREE.CircleGeometry( 15, 32 );
// material = new THREE.MeshBasicMaterial( { color: 0x000000 } );
// var circle = new THREE.Mesh( geometry, material );
// circle.position.z = 10;
// scene.add( circle );


window.addEventListener( 'resize', onWindowResize, false );

function onWindowResize(){

    camera.aspect = window.innerWidth / window.innerHeight;
    camera.updateProjectionMatrix();

    renderer.setSize( window.innerWidth, window.innerHeight );

}

function remap(value, from1, to1, from2, to2)
{
    return (value - from1) / (to1 - from1) * (to2 - from2) + from2;
}

var loader = new THREE.FontLoader();
var textMesh;
// var geometry;
loader.load('montserrat2.typeface.json', function ( font ) {
	var geometry = new THREE.TextGeometry('HUSSEIN', {
		font: font,
		size: remap(window.innerWidth, 0, 1920, 0, 30),
		height: 20,
		curveSegments: 12,
		bevelEnabled: false
    });
    geometry = new THREE.BufferGeometry().fromGeometry( geometry );
    geometry.center();
    // geometry.computeBoundingBox();

    var material = new THREE.MeshPhongMaterial( { color: 0xff0000 } );
    textMesh = new THREE.Mesh(geometry, material);
    textMesh.position.y = 16;
    scene.add(textMesh);

    geometry = new THREE.TextGeometry('ELGUINDI', {
		font: font,
		size: remap(window.innerWidth, 0, 1920, 0, 30),
		height: 20,
		curveSegments: 12,
		bevelEnabled: false
    });
    geometry.center();

    textMesh1 = new THREE.Mesh(geometry, material);
    textMesh1.position.y = -16;
    scene.add(textMesh1);
});

function animate()
{
    requestAnimationFrame(animate);

    cubes.forEach(cube => {
        cube.rotation.x += 0.005;
        cube.rotation.y += 0.01;
    });

    // textMesh.rotation.y += 0.01;

    camera.rotation.y = remap(cursorX, 0, window.innerWidth, -1, 1) / 5;
    camera.rotation.x = remap(cursorY, 0, window.innerHeight, -1, 1) / 5;

    renderer.render(scene, camera);
}

animate();
