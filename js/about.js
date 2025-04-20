document.addEventListener('DOMContentLoaded', function() {
  // Animate stats counter
  const statNumbers = document.querySelectorAll('.stat-number');
  const speed = 200;
  let animated = false;

  function animateStats() {
      if (animated) return;
      
      statNumbers.forEach(stat => {
          const target = +stat.getAttribute('data-count');
          const count = +stat.innerText;
          const increment = target / speed;
          
          if (count < target) {
              stat.innerText = Math.ceil(count + increment);
              setTimeout(animateStats, 1);
          } else {
              stat.innerText = target;
              animated = true;
          }
      });
  }

  // Intersection Observer for scroll animations
  const observerOptions = {
      threshold: 0.1,
      rootMargin: '0px 0px -100px 0px'
  };

  const sectionObserver = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('in-view');
              
              // Special case for stats section
              if (entry.target.classList.contains('success-stories')) {
                  animateStats();
              }
          }
      });
  }, observerOptions);

  // Observe all sections
  document.querySelectorAll('section').forEach(section => {
      sectionObserver.observe(section);
  });

  // Faculty card hover effect for touch devices
  const facultyCards = document.querySelectorAll('.faculty-card');
  facultyCards.forEach(card => {
      card.addEventListener('touchstart', function() {
          this.classList.add('hover');
      });
      
      card.addEventListener('touchend', function() {
          this.classList.remove('hover');
      });
  });

  // Smooth scroll for anchor links
  document.querySelectorAll('a[href^="#"]').forEach(anchor => {
      anchor.addEventListener('click', function(e) {
          e.preventDefault();
          const targetId = this.getAttribute('href');
          if (targetId === '#') return;
          
          const targetElement = document.querySelector(targetId);
          if (targetElement) {
              window.scrollTo({
                  top: targetElement.offsetTop - 80,
                  behavior: 'smooth'
              });
          }
      });
  });

  // Parallax effect for hero section
  const hero = document.querySelector('.about-hero');
  if (hero) {
      window.addEventListener('scroll', function() {
          const scrollPosition = window.pageYOffset;
          hero.style.backgroundPositionY = scrollPosition * 0.5 + 'px';
      });
  }
});