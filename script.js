const filterButtons = document.querySelectorAll('.gs-button[data-category]');
const galleryCards = document.querySelectorAll('.card[data-category]');

function setActiveButton(clickedButton) {
  filterButtons.forEach(button => {
    button.classList.toggle('active', button === clickedButton);
  });
}

function filterCards(category) {
  galleryCards.forEach(card => {
    const cardCategory = card.dataset.category;
    const shouldShow = category === 'all' || cardCategory === category;
    card.closest('.col-12').style.display = shouldShow ? '' : 'none';
  });
}

filterButtons.forEach(button => {
  button.addEventListener('click', () => {
    const category = button.dataset.category;
    setActiveButton(button);
    filterCards(category);
  });
});
