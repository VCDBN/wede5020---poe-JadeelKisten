document.addEventListener('DOMContentLoaded', function() {
    var navigationLinks = document.querySelectorAll('.topnav a');
  
    navigationLinks.forEach(function(link) {
      link.addEventListener('click', function(event) {
        // Remove the "active" class from all links
        navigationLinks.forEach(function(navLink) {
          navLink.classList.remove('active');
        });
  
        // Add the "active" class to the clicked link
        link.classList.add('active');
  
        // Add your custom logic or actions here
        console.log(link.textContent + ' link clicked!');
      });
    });
  
    const Facts = [
      "Up to 8 million children are thought to be living in orphanages.",
      "Children who grow up in orphanages are at high risk of becoming victims of violence, trafficking and exploitation.",
      "Many children suffer from development delays in social, emotional and intellectual developments.",
      "We serve the community by avoiding terrible outcomes for abused, abandoned or homeless children.",
      "We meet the physical, mental, emotional and spiritual needs of orphaned children by providing them with love, care and nourishment."
    ];
  
    // Get the button and fact display elements
    const factButton = document.getElementById('factButton');
    const factDisplay = document.getElementById('factDisplay');
  
    // Add a click event listener to the button
    factButton.addEventListener('click', function() {
      // Get a random fact from the array
      const randomIndex = Math.floor(Math.random() * Facts.length);
      const randomFact = Facts[randomIndex];
  
      // Display the random fact
      factDisplay.textContent = randomFact;
    });
  });

  var slideIndex = 0;
  showSlides();
  
  function showSlides() {
      var i;
      var slides = document.getElementsByClassName("slideshow-container")[0].getElementsByTagName("img");
      for (i = 0; i < slides.length; i++) {
          slides[i].style.opacity = "0";
      }
      slideIndex++;
      if (slideIndex > slides.length) {slideIndex = 1}
      slides[slideIndex-1].style.opacity = "8";
      setTimeout(showSlides,6000); // Change image every 5 seconds
  }