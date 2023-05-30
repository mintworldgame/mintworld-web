var camera, scene, renderer;

var isUserInteracting = false,
  onMouseDownMouseX = 0,
  onMouseDownMouseY = 0,
  lon = 0,
  onMouseDownLon = 0,
  lat = 0,
  onMouseDownLat = 0,
  phi = 0,
  theta = 0;

init();
animate();

function init() {
  var container, mesh;

  container = document.getElementById("container");

  camera = new THREE.PerspectiveCamera(
    75,
    window.innerWidth / window.innerHeight,
    1,
    1100
  );
  camera.target = new THREE.Vector3(0, 0, 0);

  scene = new THREE.Scene();

  var geometry = new THREE.SphereGeometry(500, 60, 40);
  geometry.scale(-1, 1, 1);

  var material = new THREE.MeshBasicMaterial({
    map: new THREE.TextureLoader().load("img/mw.webp"),
  });

  mesh = new THREE.Mesh(geometry, material);

  scene.add(mesh);

  renderer = new THREE.WebGLRenderer();
  renderer.setPixelRatio(window.devicePixelRatio);
  renderer.setSize(window.innerWidth, window.innerHeight);
  container.appendChild(renderer.domElement);

  document.addEventListener("mousedown", onDocumentMouseDown, false);
  document.addEventListener("mousemove", onDocumentMouseMove, false);
  document.addEventListener("mouseup", onDocumentMouseUp, false);

  document.addEventListener(
    "dragover",
    function (event) {
      event.preventDefault();
      event.dataTransfer.dropEffect = "copy";
    },
    false
  );

  document.addEventListener(
    "dragenter",
    function (event) {
      document.body.style.opacity = 0.5;
    },
    false
  );

  document.addEventListener(
    "dragleave",
    function (event) {
      document.body.style.opacity = 1;
    },
    false
  );

  document.addEventListener(
    "drop",
    function (event) {
      event.preventDefault();

      var reader = new FileReader();
      reader.addEventListener(
        "load",
        function (event) {
          material.map.image.src = event.target.result;
          material.map.needsUpdate = true;
        },
        false
      );
      reader.readAsDataURL(event.dataTransfer.files[0]);

      document.body.style.opacity = 1;
    },
    false
  );

  window.addEventListener("resize", onWindowResize, false);
}

function onWindowResize() {
  camera.aspect = window.innerWidth / window.innerHeight;
  camera.updateProjectionMatrix();

  renderer.setSize(window.innerWidth, window.innerHeight);
}

function onDocumentMouseDown(event) {
  event.preventDefault();

  var container = document.getElementById("container");
  var containerRect = container.getBoundingClientRect();

  var mouseX = event.clientX - containerRect.left;
  var mouseY = event.clientY - containerRect.top;

  if (
    mouseX >= 0 &&
    mouseY >= 0 &&
    mouseX <= containerRect.width &&
    mouseY <= containerRect.height
  ) {
    isUserInteracting = true;

    onMouseDownMouseX = event.clientX;
    onMouseDownMouseY = event.clientY;

    onMouseDownLon = lon;
    onMouseDownLat = lat;
  }
}

function onDocumentMouseMove(event) {
  if (isUserInteracting === true) {
    lon = (onMouseDownMouseX - event.clientX) * 0.1 + onMouseDownLon;
    lat = (event.clientY - onMouseDownMouseY) * 0.1 + onMouseDownLat;

    lat = Math.max(-85, Math.min(85, lat));
    phi = THREE.Math.degToRad(90 - lat);
    theta = THREE.Math.degToRad(lon);

    camera.target.x = 500 * Math.sin(phi) * Math.cos(theta);
    camera.target.y = 500 * Math.cos(phi);
    camera.target.z = 500 * Math.sin(phi) * Math.sin(theta);

    camera.lookAt(camera.target);
  }
}

function onDocumentMouseUp(event) {
  isUserInteracting = false;
}

function animate() {
  requestAnimationFrame(animate);
  update();
}

function update() {
  if (isUserInteracting === false) {
    lon += 0.05;
  }

  renderer.render(scene, camera);
}
