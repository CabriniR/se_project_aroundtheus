const initialCards = [
  {
    name: "Yosemite Valley",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/yosemite.jpg",
  },
  {
    name: "Lake Louise",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lake-louise.jpg",
  },
  {
    name: "Bald Mountains",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/bald-mountains.jpg",
  },
  {
    name: "Latemar",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/latemar.jpg",
  },
  {
    name: "Vanoise National Park",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/vanoise.jpg",
  },
  {
    name: "Lago di Braies",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/around-project/lago.jpg",
  },
];

document.addEventListener("DOMContentLoaded", () => {
  // Profile Elements
  const profileEditButton = document.querySelector(".profile__edit-button");
  const profileEditModal = document.querySelector("#profile-edit-modal");
  const modalCloseButton = profileEditModal.querySelector(".modal__close");
  const modalForm = profileEditModal.querySelector(".modal__form");
  const nameInput = profileEditModal.querySelector(".modal__title-input");
  const descriptionInput = profileEditModal.querySelector(
    ".modal__description-input"
  );
  const profileName = document.querySelector(".profile__title");
  const profileDescription = document.querySelector(".profile__description");

  // Cards Section
  const cardContainer = document.querySelector(".cards__list");

  // --- Modal Functionality ---
  function openModal() {
    // Pre-fill the form fields with current profile data
    nameInput.value = profileName.textContent;
    descriptionInput.value = profileDescription.textContent;
    profileEditModal.classList.add("modal_opened");
  }

  function closeModal() {
    profileEditModal.classList.remove("modal_opened");
  }

  function handleProfileFormSubmit(evt) {
    evt.preventDefault(); // Prevent page reload

    // Update profile information on the page
    profileName.textContent = nameInput.value;
    profileDescription.textContent = descriptionInput.value;

    // Close the modal
    closeModal();
  }

  // Event Listeners for Modal
  profileEditButton.addEventListener("click", openModal);
  modalCloseButton.addEventListener("click", closeModal);
  modalForm.addEventListener("submit", handleProfileFormSubmit);

  // --- Dynamic Card Rendering ---
  function createCard(cardData) {
    // Create a card element dynamically
    const cardElement = document.createElement("li");
    cardElement.classList.add("card");

    cardElement.innerHTML = `
      <img src="${cardData.link}" alt="${cardData.name}" class="card__image" />
      <div class="card__description">
        <h2 class="card__title">${cardData.name}</h2>
        <button class="card__like-button" type="button"></button>
      </div>
    `;

    return cardElement;
  }

  function renderCards(cards) {
    cards.forEach((cardData) => {
      const cardElement = createCard(cardData);
      cardContainer.appendChild(cardElement);
    });
  }

  // Render initial cards on page load
  renderCards(initialCards);
});
