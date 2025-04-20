// Add this script to handle scroll animations
document.addEventListener('DOMContentLoaded', function() {
  const animateElements = document.querySelectorAll('.animate-on-scroll');
  
  function checkAnimation() {
      animateElements.forEach(element => {
          const elementPosition = element.getBoundingClientRect().top;
          const windowHeight = window.innerHeight;
          
          if (elementPosition < windowHeight - 100) {
              element.classList.add('animated');
          }
      });
  }
  
  // Check on load
  checkAnimation();
  
  // Check on scroll
  window.addEventListener('scroll', checkAnimation);
});