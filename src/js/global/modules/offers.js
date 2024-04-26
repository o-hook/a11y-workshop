export const offers = () => {
  const offerLinks = document.querySelectorAll(".offers__item");
  offerLinks.forEach((offerLink) => {
    offerLink.addEventListener("click", (event) => {
      const text = offerLink.querySelector(".offers__item-heading").innerText;
      alert(`Navigating to ${text} detail page 👟`);
      event.preventDefault();
    });
  });
};
