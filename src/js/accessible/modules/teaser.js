export const teaser = () => {
  const cartButton = document.getElementById("cart-button");
  const radioButtons = document.querySelectorAll('.teaser input[type="radio"]');
  const cartHint = document.getElementById("teaser-cart-hint");
  const itemAmount = document.getElementById("item-amount");

  radioButtons.forEach((radioButton) => {
    radioButton.addEventListener("change", (event) => {
      const selectedSize = event.target.value;
      const isSizeAvailable = event.target.getAttribute("aria-disabled") !== "true";

      if (isSizeAvailable) {
        cartButton.removeAttribute("aria-disabled");
        cartButton.setAttribute("aria-describedby", "heading-air-force-one price-new");
        cartButton.removeAttribute("aria-label");
      } else {
        cartButton.setAttribute("aria-disabled", "true");
        cartButton.removeAttribute("aria-describedby");
        cartButton.setAttribute("aria-label", "Size " + selectedSize + " not available. Please choose another size.");
      }
    });
  });

  const selectedSize = () => {
    const checkedRadioButton = document.querySelector('.teaser input[type="radio"]:checked');
    return checkedRadioButton ? checkedRadioButton.value : false;
  };

  const updateItemAmount = (amount) => {
    itemAmount.classList.add("-visible");
    itemAmount.innerText = amount;
  };

  cartButton.addEventListener("click", () => {
    if (selectedSize() === false) {
      cartHint.classList.remove("-valid");
      cartHint.classList.add("-invalid");
      cartHint.innerText = "Please select a size before adding the item to cart.";
    } else if (cartButton.getAttribute("aria-disabled") === "true") {
      cartHint.classList.remove("-valid");
      cartHint.classList.add("-invalid");
      cartHint.innerText = "Size " + selectedSize() + " not available. Please choose another size.";
    } else {
      cartHint.classList.remove("-invalid");
      cartHint.classList.add("-valid");
      cartHint.innerText = "Mike Air Huarache in size " + selectedSize() + ", added to cart";
      const amount = parseInt(itemAmount.innerText) + 1;
      updateItemAmount(amount);
    }
  });
};
