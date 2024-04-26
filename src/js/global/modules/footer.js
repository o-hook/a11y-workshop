export const footer = () => {
  const footerLinks = document.querySelectorAll(".footer a");
  footerLinks.forEach((footerLink) => {
    footerLink.addEventListener("click", (event) => {
      const text =
        event.currentTarget.innerText !== ""
          ? event.currentTarget.innerText
          : event.currentTarget.querySelector("img").getAttribute("alt");
      alert(`Navigating to ${text} page 🚀`);
      event.preventDefault();
    });
  });
};
