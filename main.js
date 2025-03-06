document.addEventListener("DOMContentLoaded", function () {
  // Menu Toggle
  const menuBtn = document.getElementById("menu-btn");
  const navLinks = document.getElementById("nav-links");
  const menuBtnIcon = menuBtn.querySelector("i");

  menuBtn.addEventListener("click", () => {
    navLinks.classList.toggle("open");
    const isOpen = navLinks.classList.contains("open");
    menuBtnIcon.setAttribute("class", isOpen ? "ri-close-line" : "ri-menu-line");
  });

  navLinks.addEventListener("click", () => {
    navLinks.classList.remove("open");
    menuBtnIcon.setAttribute("class", "ri-menu-line");
  });

  // Fix: Book Trip Button Event Listener
  const bookTripBtn = document.getElementById("bookTripBtn");
  if (bookTripBtn) {
    bookTripBtn.addEventListener("click", function () {
      alert("Your trip has been successfully booked!");
      // OR Redirect to a booking page
      // window.location.href = "book-trip.html";
    });
  }

  // Scroll Reveal Animations
  const scrollRevealOption = {
    origin: "bottom",
    distance: "50px",
    duration: 1000,
  };

  ScrollReveal().reveal(".header__image img", { ...scrollRevealOption, origin: "right" });
  ScrollReveal().reveal(".header__content p", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".header__content h1", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".header__btns", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".destination__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".showcase__image img", { ...scrollRevealOption, origin: "left" });
  ScrollReveal().reveal(".showcase__content h4", { ...scrollRevealOption, delay: 500 });
  ScrollReveal().reveal(".showcase__content p", { ...scrollRevealOption, delay: 1000 });
  ScrollReveal().reveal(".showcase__btn", { ...scrollRevealOption, delay: 1500 });
  ScrollReveal().reveal(".banner__card", { ...scrollRevealOption, interval: 500 });
  ScrollReveal().reveal(".discover__card", { ...scrollRevealOption, interval: 500 });

  // Swiper Initialization (Responsive)
  const swiper = new Swiper(".swiper", {
    slidesPerView: 1, // Default for small screens
    spaceBetween: 20,
    loop: true,
    breakpoints: {
      640: { slidesPerView: 2 }, // Medium screens
      1024: { slidesPerView: 3 } // Large screens
    }
  });
});
