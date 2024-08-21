document.addEventListener("DOMContentLoaded", function () {
  const menuToggle = document.getElementById("menu-toggle");
  const mobileMenu = document.getElementById("mobile-menu");

  function toggleMenu() {
    // Toggle the 'opened' class on the button
    menuToggle.classList.toggle("opened");

    // Toggle the 'hidden' class on the mobile menu
    mobileMenu.classList.toggle("hidden");

    // Update the aria-expanded attribute based on the 'opened' class
    const isOpened = menuToggle.classList.contains("opened");
    menuToggle.setAttribute("aria-expanded", isOpened);
  }

  menuToggle.addEventListener("click", toggleMenu);
});
