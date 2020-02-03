const modalOverlay = document.querySelector(".modal-overlay");
const cards = document.querySelectorAll(".card");

for (let card of cards) {
  card.addEventListener("click", function() {
    const imgId = card.getAttribute("id");
    const cardTitle = card.querySelector(".card-title").textContent;
    const cardAuthor = card.querySelector(".card-author").textContent;

    modalOverlay.classList.add("active");

    modalOverlay.querySelector(".modal-img").src = `/assets/img/${imgId}.png`;
    modalOverlay.querySelector(".modal-name").textContent = `${cardTitle}`;
    modalOverlay.querySelector(".modal-author").textContent = `${cardAuthor}`;
  });
}

document.querySelector(".close-modal").addEventListener("click", function() {
  modalOverlay.classList.remove("active");
});
