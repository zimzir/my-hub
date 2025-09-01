

<div id="animation-container">
    <img id="animated-image" src="images/index/pixil-frame-0.png" width="200">
</div>

<style>
  #animation-container {
    display: flex;
    justify-content: center;
    align-items: center;
    height: 200px; /* Adjust height of container */
    margin-top: 150px; /* Moves it lower on the page */
  }
</style>

<script>
  // Image sequence
  const frames = [
    "images/index/pixil-frame-0.png",
    "images/index/pixil-frame-1.png",
    "images/index/pixil-frame-2.png"
  ];

  let index = 0;
  const imgElement = document.getElementById("animated-image");

  // Preload images
  const preloadedImages = frames.map(src => {
    const img = new Image();
    img.src = src;
    return img;
  });

  function animateFrames() {
    index = (index + 1) % frames.length; // Loop through frames
    imgElement.src = preloadedImages[index].src; // Use preloaded images
  }

  // Start animation after images are preloaded
  window.onload = () => {
    setInterval(animateFrames, 100); // Adjust speed here
  };
</script>
