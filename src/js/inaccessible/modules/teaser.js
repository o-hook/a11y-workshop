export const teaser = () => {
  const cartButton = document.getElementById("cart-button");
  const itemAmount = document.getElementById("item-amount");

  const updateItemAmount = (amount) => {
    itemAmount.classList.add("-visible");
    itemAmount.innerText = amount;
  };

  cartButton.addEventListener("click", () => {
    const amount = parseInt(itemAmount.innerText) + 1;
    updateItemAmount(amount);
  });
};
