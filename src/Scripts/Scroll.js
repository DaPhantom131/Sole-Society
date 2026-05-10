window.addEventListener("scroll", () => {
  const navEl = document.querySelector(".header");

  if (!navEl) return;

  if (window.scrollY >= 40) {
    navEl.classList.add("navbar-scrolled")
  } else if (window.scrollY < 40) {
    navEl.classList.remove("navbar-scrolled")
  }
});