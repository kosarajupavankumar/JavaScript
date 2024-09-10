const allCards = document.querySelectorAll(".card");

allCards.forEach((card) => {
  card.addEventListener("dblclick", (event) => {
    const currentCard = event.currentTarget;
    console.log(currentCard);

    const color = currentCard.getAttribute("data-color");

    currentCard.classList.add(color);

    currentCard.setAttribute("data-color", "used");
  });
});
