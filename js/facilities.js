// Animation on scroll
document.addEventListener('DOMContentLoaded', function() {
  const animateOnScroll = function() {
      const elements = document.querySelectorAll('.facility-card, .feature-item, .testimonial-card');
      
      elements.forEach((element, index) => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              // Add animation delay based on element index
              element.style.animationDelay = `${index * 0.01}s`;
              element.classList.add('animate');
          }
      });
  };
  
  window.addEventListener('scroll', animateOnScroll);
  animateOnScroll(); // Run once on load
});