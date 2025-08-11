//cards array
const initialCards = [
  {
    name: "Golden Gate Bridge",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/7-photo-by-griffin-wooldridge-from-pexels.jpg",
  },

  {
    name: "Val Thorens",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/1-photo-by-moritz-feldmann-from-pexels.jpg",
  },

  {
    name: "Restaurant terrace",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/2-photo-by-ceiline-from-pexels.jpg",
  },

  {
    name: "An outdoor cafe",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/3-photo-by-tubanur-dogan-from-pexels.jpg",
  },

  {
    name: "A very long bridge, over the forest and through the trees",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/4-photo-by-maurice-laschet-from-pexels.jpg",
  },

  {
    name: "Tunnel with morning light",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/5-photo-by-van-anh-nguyen-from-pexels.jpg",
  },

  {
    name: "Mountain house",
    link: "https://practicum-content.s3.us-west-1.amazonaws.com/software-engineer/spots/6-photo-by-moritz-feldmann-from-pexels.jpg",
  },
];

//modal card selectors
const previewCardModal = document.querySelector("#card-modal");
const previewCardCloseBtn = previewCardModal.querySelector(
  ".modal__close-button_alt"
);
const previewCardImageEl = previewCardModal.querySelector(".modal__card-image");
const previewCardCaptionEl = previewCardModal.querySelector(
  ".modal__card-caption"
);

//card selectors
const cardsContainer = document.querySelector(".cards__list");
const cardTemplate = document.querySelector("#card-template");

//edit profile modal
const profileNameEl = document.querySelector(".profile__title");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#name-input");
const profileDescriptionInput = document.querySelector("#description-input");
const profileSaveBtn = document.querySelector(".modal__submit-button");

//new post modal
const postCaptionInput = document.querySelector("#caption-input");
const postLinkInput = document.querySelector("#image-link-input");
const postSaveBtn = document.querySelector(".modal__submit-button");

//open button selectors
const editProfileBtn = document.querySelector("#editProfileBtn");
const newPostBtn = document.querySelector("#newPostBtn");

//modal selectors
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");

//close buttons
const modalProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const modalPostCloseBtn = newPostModal.querySelector(".modal__close-button");

//edit profile events
editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);
  console.log("editProfileBtn was clicked");
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
});

modalProfileCloseBtn.addEventListener("click", function () {
  closeModal(editProfileModal);
  console.log("modalProfileCloseBtn was clicked");
});

previewCardCloseBtn.addEventListener("click", function () {
  closeModal(previewCardModal);
  console.log("previewCardCloseBtn was clicked");
});

//open & close modal functions: START
//open modal function

function openModal(modal) {
  modal.classList.add("modal_is-opened");
}

// close modal function

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
}
//open & close modal functions: END

//edit profile submission functions
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  closeModal(editProfileModal);
}
editProfileModal.addEventListener("submit", handleProfileFormSubmit);
// end of function//

//new post submission functions
function handlePostFormSubmit(evt) {
  evt.preventDefault();
  closeModal(newPostModal);
  console.log(postCaptionInput.value);
  console.log(postLinkInput.value);

  const inputValues = {
    name: postCaptionInput.value,
    link: postLinkInput.value,
  };

  const cardElement = getCardElement(inputValues);
  cardsContainer.prepend(cardElement);
}
newPostModal.addEventListener("submit", handlePostFormSubmit);
// end of function//

//card element function-START:

function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardCaptionElement = cardElement.querySelector(".card__caption");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  cardLikeBtn.addEventListener("click", function () {
    cardLikeBtn.classList.toggle("card__like-button_active");
  });

  const cardDelBtn = cardElement.querySelector(".card__delete-button");
  cardDelBtn.addEventListener("click", function () {
    cardElement.classList.add("card_deleted");
    setTimeout(() => cardElement.remove(), 500);
  });

  cardImageElement.addEventListener("click", function () {
    previewCardImageEl.src = data.link;
    previewCardImageEl.alt = data.name;
    previewCardCaptionEl.textContent = data.name;
    openModal(previewCardModal);
  });

  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardCaptionElement.textContent = data.name;

  return cardElement;
}

//new post events
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);
  console.log("newPostBtn was clicked");
});

modalPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
  console.log("modalPostCloseBtn was clicked");
});

// for loop cards
initialCards.forEach(function (card) {
  const cardElement = getCardElement(card);
  cardsContainer.append(cardElement);
});

// closing modals w/ esc key
const closeModalEsc = (evt) => {
  if (evt.key === "Escape") {
    const openedModal = document.querySelector(".modal_is-opened");
    if (openedModal) {
      closeModal(openedModal);
    }
  }
};

// closing modals by clicking overlay
const closeModalOverlayClick = (evt) => {
  if (evt.target.classList.contains("modal_is-opened")) {
    closeModal(evt.target);
  }
};

// allModals selector
const allModals = document.querySelectorAll(".modal");
allModals.forEach((modal) => {
  modal.addEventListener("mousedown", closeModalOverlayClick);
});

document.addEventListener("keydown", closeModalEsc);
