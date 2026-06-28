// 3D Viewer - Three.js GLB/STL loader
document.addEventListener('DOMContentLoaded', function () {
  document.querySelectorAll('.viewer-3d').forEach(function (container) {
    const modelPath = container.dataset.model;
    if (modelPath) initViewer(container, modelPath);
  });
});

function initViewer(container, modelPath) {
  // Scene
  const scene = new THREE.Scene();
  scene.background = new THREE.Color(0x1a1a1a);

  // Camera
  const camera = new THREE.PerspectiveCamera(50, container.clientWidth / container.clientHeight, 0.01, 1000);
  camera.position.set(0, 0, 5);

  // Renderer
  const renderer = new THREE.WebGLRenderer({ antialias: true });
  renderer.setSize(container.clientWidth, container.clientHeight);
  renderer.setPixelRatio(window.devicePixelRatio);
  container.appendChild(renderer.domElement);

  // Lighting - strong lights for visibility
  const ambientLight = new THREE.AmbientLight(0xffffff, 0.7);
  scene.add(ambientLight);

  const frontLight = new THREE.DirectionalLight(0xffffff, 1);
  frontLight.position.set(0, 0, 5);
  scene.add(frontLight);

  const topLight = new THREE.DirectionalLight(0xffffff, 0.8);
  topLight.position.set(0, 5, 0);
  scene.add(topLight);

  const sideLight = new THREE.DirectionalLight(0xffffff, 0.5);
  sideLight.position.set(5, 0, 0);
  scene.add(sideLight);

  // Group to hold the model (for rotation)
  const modelGroup = new THREE.Group();
  scene.add(modelGroup);

  // Load based on extension
  const ext = modelPath.split('.').pop().toLowerCase();
  console.log('Loading model:', modelPath, 'Extension:', ext);

  if (ext === 'glb' || ext === 'gltf') {
    loadGLB(modelGroup, modelPath, camera);
  } else if (ext === 'stl') {
    loadSTL(modelGroup, modelPath, camera);
  }

  // Animation
  function animate() {
    requestAnimationFrame(animate);
    modelGroup.rotation.y += 0.005;
    renderer.render(scene, camera);
  }
  animate();

  // Resize handler
  window.addEventListener('resize', function () {
    camera.aspect = container.clientWidth / container.clientHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(container.clientWidth, container.clientHeight);
  });

  // Mouse drag rotation
  let dragging = false, prev = { x: 0, y: 0 };
  container.addEventListener('mousedown', e => {
    dragging = true;
    prev = { x: e.clientX, y: e.clientY };
  });
  container.addEventListener('mousemove', e => {
    if (!dragging) return;
    modelGroup.rotation.y += (e.clientX - prev.x) * 0.01;
    modelGroup.rotation.x += (e.clientY - prev.y) * 0.01;
    prev = { x: e.clientX, y: e.clientY };
  });
  container.addEventListener('mouseup', () => dragging = false);
  container.addEventListener('mouseleave', () => dragging = false);
}

function loadGLB(group, path, camera) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/GLTFLoader.js';
  script.onload = function () {
    const loader = new THREE.GLTFLoader();
    loader.load(path, function (gltf) {
      const model = gltf.scene;
      centerAndScaleModel(model, camera);
      group.add(model);
      console.log('GLB loaded successfully');
    },
      function (progress) {
        console.log('Loading:', (progress.loaded / progress.total * 100).toFixed(0) + '%');
      },
      function (err) {
        console.error('GLB error:', err);
      });
  };
  document.head.appendChild(script);
}

function loadSTL(group, path, camera) {
  const script = document.createElement('script');
  script.src = 'https://cdn.jsdelivr.net/npm/three@0.128.0/examples/js/loaders/STLLoader.js';
  script.onload = function () {
    console.log('STLLoader loaded, fetching model...');
    const loader = new THREE.STLLoader();
    loader.load(path, function (geometry) {
      console.log('STL geometry loaded');

      // Material - bright emerald color
      const material = new THREE.MeshStandardMaterial({
        color: 0x10b981,
        metalness: 0.3,
        roughness: 0.5
      });

      const mesh = new THREE.Mesh(geometry, material);

      // Center geometry
      geometry.computeBoundingBox();
      geometry.center();

      // Scale to fit view
      const box = new THREE.Box3().setFromObject(mesh);
      const size = box.getSize(new THREE.Vector3());
      const maxDim = Math.max(size.x, size.y, size.z);
      const scale = 2.5 / maxDim;
      mesh.scale.setScalar(scale);

      group.add(mesh);
      console.log('STL added to scene, size:', size, 'scale:', scale);
    },
      function (progress) {
        if (progress.total > 0) {
          console.log('Loading STL:', (progress.loaded / progress.total * 100).toFixed(0) + '%');
        }
      },
      function (err) {
        console.error('STL error:', err);
      });
  };
  script.onerror = function () {
    console.error('Failed to load STLLoader script');
  };
  document.head.appendChild(script);
}

function centerAndScaleModel(model, camera) {
  const box = new THREE.Box3().setFromObject(model);
  const center = box.getCenter(new THREE.Vector3());
  const size = box.getSize(new THREE.Vector3());

  model.position.sub(center);

  const maxDim = Math.max(size.x, size.y, size.z);
  const scale = 2.5 / maxDim;
  model.scale.setScalar(scale);

  console.log('Model centered and scaled:', scale);
}