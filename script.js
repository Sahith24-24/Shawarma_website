document.addEventListener('DOMContentLoaded', () => {
  // Sticky Navbar
  const navbar = document.getElementById('navbar');
  window.addEventListener('scroll', () => {
    if (window.scrollY > 50) {
      navbar.classList.add('scrolled');
    } else {
      navbar.classList.remove('scrolled');
    }
  });

  // Mobile Menu Toggle
  const menuBtn = document.querySelector('.mobile-menu-btn');
  const navLinks = document.querySelector('.nav-links');
  
  if (menuBtn && navLinks) {
    menuBtn.addEventListener('click', () => {
      navLinks.classList.toggle('active');
      menuBtn.classList.toggle('open');
    });

    // Close menu when clicking a link
    navLinks.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        navLinks.classList.remove('active');
        menuBtn.classList.remove('open');
      });
    });
  }

  // Intersection Observer for Scroll Animations
  const observerOptions = {
    threshold: 0.1,
    rootMargin: "0px 0px -50px 0px"
  };

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add('is-visible');
      }
    });
  }, observerOptions);

  // Target elements to animate
  const animatedElements = document.querySelectorAll('.fade-in-up, .slide-in-up');
  animatedElements.forEach(el => observer.observe(el));

  // Form Submission
  const leadForm = document.getElementById('leadForm');
  if (leadForm) {
    leadForm.addEventListener('submit', (e) => {
      e.preventDefault();
      const btn = leadForm.querySelector('button[type="submit"]');
      const originalText = btn.textContent;
      
      btn.textContent = 'Sending...';
      btn.style.opacity = '0.7';
      btn.disabled = true;

      // Simulate API call
      setTimeout(() => {
        btn.textContent = 'Application Submitted!';
        btn.style.backgroundColor = '#10b981'; // Success green
        leadForm.reset();
        
        setTimeout(() => {
          btn.textContent = originalText;
          btn.style.backgroundColor = '';
          btn.style.opacity = '1';
          btn.disabled = false;
        }, 3000);
      }, 1500);
    });
  }
});
