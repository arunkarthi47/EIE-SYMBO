// Toggle mobile menu
function toggleMenu(){
  document.querySelector('.nav').classList.toggle('active');
}

// Smooth scroll (optional)
document.querySelectorAll('a[href^=\"#\"]').forEach(anchor => {
  anchor.addEventListener('click', function(e) {
    e.preventDefault();
    document.querySelector(this.getAttribute('href')).scrollIntoView({
      behavior: 'smooth'
    });
    document.querySelector('.nav').classList.remove('active');
  });
});

// Simple form handler
document.querySelector('form').addEventListener('submit', function(e){
  e.preventDefault();
  alert("✅ Registration submitted!");
  this.reset();
});
