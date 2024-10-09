function addRevealEffect(elements, animationClass, customClass = null) {
    const observer = new IntersectionObserver(
      (entries, observer) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            if (customClass) {
              entry.target.classList.add(customClass);
            }
            entry.target.classList.add(animationClass, "revealed");
            // Unobserve the element after the first intersection
            observer.unobserve(entry.target);
          } else {
            // Optionally, you can remove the class when not intersecting
            if (customClass) {
              entry.target.className = customClass;
            }
          }
        });
      },
      { threshold: 0.1 }
    );
  
    elements.forEach((element) => {
      observer.observe(element);
    });
  }
  
  // Only apply animations if the screen width is 768px or more
  if (window.innerWidth >= 768) {
    const sectionElements = document.querySelectorAll(".up");
    addRevealEffect(sectionElements, "reveal-down", "up");
    const leftSectionElements = document.querySelectorAll(".left-an");
    addRevealEffect(leftSectionElements, "reveal-left", "left-an");
    const leftSectionElements2 = document.querySelectorAll(".left-an768");
    addRevealEffect(leftSectionElements2, "reveal-left768", "left-an768");
    // Apply separate animations
    const rightSectionElements = document.querySelectorAll(".right-an");
    addRevealEffect(rightSectionElements, "reveal-right", "right-an");
  }
  
  
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
  
    // Preload the image and then show the content with smooth transitions
    preloadBackgroundImage("black.jpg").then(() => {
      // Fade out the loading image
      document.querySelector('.loading').style.opacity = '0';
  
      // After loading image fades out, remove it and show content
      setTimeout(() => {
        document.querySelector('.loading').style.display = 'none';
        
        // Fade in the content
        const content = document.querySelector('.content');
        content.style.visibility = 'visible';
        content.style.opacity = '1'; // Trigger fade-in
      }, 50); // Match the transition duration of the loading opacity (1s)
    });
  
  
     // Function to show progress bar for 1 second
     function showProgressBar(callback) {
      // Show progress bar
      document.getElementById("progress-bar").style.display = "block";
  
      // Hide progress bar after 1 second
      setTimeout(function () {
        document.getElementById("progress-bar").style.display = "none";
        if (callback) {
          callback(); // Execute callback function
        }
      }, 1000);
    }
    window.addEventListener("load", function () {
      showProgressBar(); // Show progress bar on page load
    });
  
    document
          .getElementById("home")
          .addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            showProgressBar(function () {
              window.location.href = "index.html"; // Redirect after progress bar animation completes
            }); // Show progress bar when link is clicked
          });


          document
          .getElementById("logo")
          .addEventListener("click", function (event) {
            event.preventDefault(); // Prevent default link behavior
            showProgressBar(function () {
              window.location.href = "index.html"; // Redirect after progress bar animation completes
            }); // Show progress bar when link is clicked
          });