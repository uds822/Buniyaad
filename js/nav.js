function toggleMenu() {
  document.querySelector('.navbar').classList.toggle('active');
}

// Improved navbar highlighting
document.addEventListener('DOMContentLoaded', function() {
  const links = document.querySelectorAll('.nav-links a');
  const currentPath = window.location.pathname.toLowerCase();
  
  links.forEach(link => {
    // Get just the filename without .html or query parameters
    const linkPath = link.getAttribute('href').toLowerCase();
    const linkPage = linkPath.replace('.html', '').split('?')[0];
    const currentPage = currentPath.replace('.html', '').split('/').pop() || 'index';
    
    // Special case for index page
    if ((currentPage === 'index' && linkPage === 'index') || 
        (currentPage === linkPage && currentPage !== 'index')) {
      link.classList.add("active");
    }
    
    // Debugging - uncomment to see what's being compared
    // console.log(`Current: ${currentPage} | Link: ${linkPage} | Match: ${link.classList.contains('active')}`);
  });
});