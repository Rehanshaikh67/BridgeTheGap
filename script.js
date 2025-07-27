/*
 * Script for Bridge the Gap website
 * Handles the mobile navigation toggle and inserts the
 * current year into the footer automatically. Keeping
 * this logic in a separate file helps to organise code
 * and makes the HTML markup easier to maintain.
 */

// Toggle the mobile navigation menu
document.addEventListener('DOMContentLoaded', function () {
  const menuToggle = document.getElementById('mobile-menu');
  const navList = document.querySelector('#navbar ul');

  // Open and close the mobile menu
  menuToggle.addEventListener('click', function () {
    navList.classList.toggle('active');
    menuToggle.classList.toggle('active');
  });

  // Close the mobile menu when clicking any link
  const navLinks = navList.querySelectorAll('a');
  navLinks.forEach(function (link) {
    link.addEventListener('click', function () {
      if (navList.classList.contains('active')) {
        navList.classList.remove('active');
        menuToggle.classList.remove('active');
      }
    });
  });

  // Insert the current year into the footer
  const yearElement = document.getElementById('year');
  if (yearElement) {
    const currentYear = new Date().getFullYear();
    yearElement.textContent = currentYear;
  }
});