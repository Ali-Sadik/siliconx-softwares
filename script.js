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
  preloadBackgroundImage("public/black.jpg").then(() => {
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


  document.querySelector('.btn.btn--width').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('.sect.sect--padding-bottom').scrollIntoView({
      behavior: 'smooth'
    });
  });

  document.querySelector('#blog').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    document.querySelector('#blog-section').scrollIntoView({
      behavior: 'smooth'
    });
  });


// Event listener for the 'Services' button
// Event listener for the 'Services' button
document.querySelector('#service').addEventListener('click', function(event) {
  event.preventDefault(); // Prevent default behavior of the anchor tag

  // Smoothly scroll to the services section
  document.querySelector('#services-section').scrollIntoView({
      behavior: 'smooth'
  });

  // Collapse the navigation menu
  const navbar = document.querySelector('#navbar');
  navbar.classList.add('collapse'); // Add collapse class to hide the menu
});

// Optional: Toggle button to show/hide the navbar
document.querySelector('.header__link').addEventListener('click', function() {
  const navbar = document.querySelector('#navbar');
  navbar.classList.toggle('collapse'); // Toggle collapse class
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
        .getElementById("post4")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "https://www.facebook.com/share/p/zU8UArZ4V9h7i25H/"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });

        document
        .getElementById("post3")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "https://www.linkedin.com/posts/sadik047_stl-containers-activity-7243314487301177344-ikuQ?utm_source=share&utm_medium=member_desktop"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });

        document
        .getElementById("post2")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "https://www.facebook.com/share/p/rbnLrbEEninRJ4gZ/"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });

        document
        .getElementById("post1")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "https://www.facebook.com/share/p/UcikhcrjNHTwF4ij/"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });

        document
        .getElementById("connect")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "contact.html"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });

        document
        .getElementById("contact-us")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "contact.html"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
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

        document
        .getElementById("figma")
        .addEventListener("click", function (event) {
          event.preventDefault(); // Prevent default link behavior
          showProgressBar(function () {
            window.location.href = "https://www.facebook.com/profile.php?id=61566541607873"; // Redirect after progress bar animation completes
          }); // Show progress bar when link is clicked
        });