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
  const cardTemplate = document.querySelector("#card-template");

  // Declare initialCards array
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
    // Clone the card template
    const cardElement = cardTemplate.content.cloneNode(true);

    // Set the card image, title, and add any other necessary attributes
    const cardImage = cardElement.querySelector(".card__image");
    const cardTitle = cardElement.querySelector(".card__title");

    cardImage.src = cardData.link;
    cardImage.alt = cardData.name;
    cardTitle.textContent = cardData.name;

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
