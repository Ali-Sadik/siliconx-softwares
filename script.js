$("#myCarousel").carousel({
  interval: false
});

 // Function to preload the background image
 function preloadBackgroundImage(url) {
  return new Promise((resolve) => {
      const img = new Image();
      img.src = url;
      img.onload = () => resolve();
  });
}

// Preload the image and then show the content
preloadBackgroundImage("black.jpg").then(() => {
  document.body.style.display = 'block'; // Show body content
  document.querySelector('.loading').style.display = 'none'; // Hide loading indicator
  document.querySelector('.content').style.display = 'block'; // Show content
});
