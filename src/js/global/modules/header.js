export const header = () => {
  const navLinks = document.querySelectorAll(".header__navigation-items a");
  navLinks.forEach((navLink) => {
    navLink.addEventListener("click", (event) => {
      const text = event.target.innerText;
      alert(`Navigating to ${text}`);
      event.preventDefault();
    });
  });
};
