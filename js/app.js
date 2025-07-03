document.addEventListener('DOMContentLoaded', () => {
  // Handles hamburger menu toggle
  const hamburgerMenu = document.querySelector('.hamburger-menu');
  const mainNav = document.querySelector('.main-nav');

  hamburgerMenu.addEventListener('click', () => {
    hamburgerMenu.classList.toggle('active');
    mainNav.classList.toggle('active');
    document.body.classList.toggle('menu-open');
  });

  // Close menu when clicking on a link
  const navLinks = document.querySelectorAll('.main-nav a');
  navLinks.forEach(link => {
    link.addEventListener('click', () => {
      hamburgerMenu.classList.remove('active');
      mainNav.classList.remove('active');
      document.body.classList.remove('menu-open');
    });
  });

  const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        entry.target.classList.add("in-view");
        observer.unobserve(entry.target); // Remove observer after animation
      }
    });
  }, {
    threshold: 0.1 // Trigger when 10% is visible
  });

  document.querySelectorAll('.animate-on-scroll').forEach(elem => {
    observer.observe(elem);
  });


  // Handle booking button click (I will put it as successful for now)
  const bookButton = document.querySelector('.btn.book-session');
  bookButton.addEventListener('click', () => {
    // Create notification element
    const notification = document.createElement('div');
    notification.className = 'notification success';
    notification.innerHTML = '<p>Booking successful! We will contact you soon.</p>';

    // Add to body
    document.body.appendChild(notification);

    // Show notification with animation
    setTimeout(() => {
      notification.classList.add('show');
    }, 10);

    // Auto-dismiss after 3 seconds
    setTimeout(() => {
      notification.classList.remove('show');
      setTimeout(() => {
        notification.remove();
      }, 500);
    }, 3000);
  });
});
