document.addEventListener('DOMContentLoaded', () => {
    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navLinks = document.querySelectorAll('.nav-link');

    // Toggle menu
    hamburger.addEventListener('click', () => {
        hamburger.classList.toggle('active');
        navMenu.classList.toggle('active');
    });

    // Close menu when clicking a link
    navLinks.forEach(link => {
        link.addEventListener('click', () => {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        });
    });

    // Close menu when clicking outside
    document.addEventListener('click', (e) => {
        if (!hamburger.contains(e.target) && !navMenu.contains(e.target)) {
            hamburger.classList.remove('active');
            navMenu.classList.remove('active');
        }
    });
});


/*for payment card*/
document.addEventListener("DOMContentLoaded", function () {
    // Get references to elements
    const checkoutBtn = document.querySelector(".checkout-btn");
    const paymentModal = document.querySelector(".modal-overlay");
    const closeModalBtn = document.querySelector(".close-modal");

    // Show modal when checkout button is clicked
    checkoutBtn.addEventListener("click", function () {
      paymentModal.style.display = "flex";
      document.body.style.overflow = "hidden"; // Prevent scrolling when modal is open
    });

    // Hide modal when close button is clicked
    closeModalBtn.addEventListener("click", function () {
      paymentModal.style.display = "none";
      document.body.style.overflow = "auto"; // Enable scrolling again
    });

    // Hide modal when clicking outside of it
    window.addEventListener("click", function (event) {
      if (event.target === paymentModal) {
        paymentModal.style.display = "none";
        document.body.style.overflow = "auto"; // Enable scrolling again
      }
    });
  });