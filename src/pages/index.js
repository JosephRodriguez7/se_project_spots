import "./index.css";
import {
  enableValidation,
  resetValidation,
  toggleButtonState,
  settings,
} from "../scripts/modules/validation.js";

import Api from "../../utils/Api.js";

// API
const api = new Api({
  baseUrl: "https://around-api.en.tripleten-services.com/v1",
  headers: {
    authorization: "8cf30273-2dc5-46c8-8e03-23447995aee4",
    "Content-Type": "application/json",
  },
});

// calling API Methods:
api.getInitialCards().then((cards) => {
  console.log("Cards received:", cards);
  cards.forEach(function (card) {
    const cardElement = getCardElement(card);
    cardsContainer.append(cardElement);
  });
});

api
  .getUserInfo()
  .then((user) => {
    console.log("User info received:", user);
    profileDescriptionEl.textContent = user.about;
    profileNameEl.textContent = user.name;
    profileAvatar.src = user.avatar;
  })
  .catch((err) => {
    console.error("Failed to get user info:", err);
  });

function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileSaveBtn.textContent = "Saving...";
  const name = profileNameInput.value;
  const about = profileDescriptionInput.value;
  api
    .updateUserInfo({ name, about })
    .then((userUpdate) => {
      profileNameEl.textContent = userUpdate.name;
      profileDescriptionEl.textContent = userUpdate.about;
      console.log("User info updated:", userUpdate);
    })
    .catch((err) => {
      console.error("Failed to update user info:", err);
    })
    .finally(() => {
      closeModal(editProfileModal);
      profileSaveBtn.textContent = "Save";
    });
}

function handlePostFormSubmit(evt) {
  evt.preventDefault();
  postSaveBtn.textContent = "Saving...";
  console.log(postCaptionInput.value);
  console.log(postLinkInput.value);

  const inputValues = {
    name: postCaptionInput.value,
    link: postLinkInput.value,
  };

  api
    .addCard(inputValues)
    .then((newCard) => {
      console.log("New card added:", newCard);
      const cardElement = getCardElement(newCard);
      cardsContainer.prepend(cardElement);

      const form = evt.target;
      const submitBtn = form.querySelector(settings.submitButtonSelector);
      const inputList = Array.from(
        form.querySelectorAll(settings.inputSelector)
      );
      form.reset();
      toggleButtonState(inputList, submitBtn, settings);
      resetValidation(form, settings);
    })
    .catch((err) => {
      console.error("Failed to upload new card:", err);
    })
    .finally(() => {
      postSaveBtn.textContent = "Save";
      closeModal(newPostModal);
    });
}

//cards array (PRACTICE, now commented)
/*
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
*/

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

//modal selectors
const editProfileModal = document.querySelector("#edit-profile-modal");
const newPostModal = document.querySelector("#new-post-modal");
const confirmDeleteModal = document.querySelector("#deletion-modal");
const editAvatarModal = document.querySelector("#update-avatar-modal");

//profile variables
const profileNameEl = document.querySelector(".profile__title");
const profileDescriptionEl = document.querySelector(".profile__description");
const profileNameInput = document.querySelector("#name-input");
const profileDescriptionInput = document.querySelector("#description-input");
const profileSaveBtn = editProfileModal.querySelector(".modal__submit-button");
const profileAvatar = document.querySelector(".profile__avatar");

//new post modal
const postCaptionInput = document.querySelector("#caption-input");
const postLinkInput = document.querySelector("#image-link-input");
const postSaveBtn = newPostModal.querySelector(".modal__submit-button");

//open button selectors
const editProfileBtn = document.querySelector("#editProfileBtn");
const newPostBtn = document.querySelector("#newPostBtn");

//close buttons
const modalProfileCloseBtn = editProfileModal.querySelector(
  ".modal__close-button"
);
const modalPostCloseBtn = newPostModal.querySelector(".modal__close-button");

//deletion modal buttons
const confirmDeleteBtn = confirmDeleteModal.querySelector(".modal__del-button");
const cancelDeleteBtn = confirmDeleteModal.querySelector(
  ".modal__cancel-button"
);
const deleteModalCloseBtn = confirmDeleteModal.querySelector(
  ".modal__close-button"
);

//edit avatar
const editAvatarBtn = document.querySelector(".profile__avatar-btn");
const editAvatarCloseBtn = editAvatarModal.querySelector(
  ".modal__close-button"
);
const saveAvatarBtn = editAvatarModal.querySelector(".modal__submit-button");
const avatarModalForm = editAvatarModal.querySelector(".modal__form");
const avatarModalInput = editAvatarModal.querySelector(".modal__input");

editAvatarBtn.addEventListener("click", function () {
  openModal(editAvatarModal);
});
editAvatarCloseBtn.addEventListener("click", function () {
  closeModal(editAvatarModal);
});

editAvatarModal.addEventListener("submit", handleAvatarSubmit);

//edit profile events
editProfileBtn.addEventListener("click", function () {
  openModal(editProfileModal);

  const form = editProfileModal.querySelector(settings.formSelector);
  resetValidation(form, settings);
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

//Switch button text contents function (EXPERIMENTAL)
function setButtonText(
  btn,
  isLoading,
  defaultText = "Save",
  loadingText = "Saving..."
) {
  if (isLoading) {
    btn.textContent = loadingText;
  } else {
    btn.textContent = defaultText;
  }
}

//open & close modal functions: START
//open modal function

function openModal(modal) {
  modal.classList.add("modal_is-opened");
  document.addEventListener("keydown", closeModalEsc);
}

// close modal function

function closeModal(modal) {
  modal.classList.remove("modal_is-opened");
  document.removeEventListener("keydown", closeModalEsc);
}
//open & close modal functions: END

editProfileModal.addEventListener("submit", handleProfileFormSubmit);

newPostModal.addEventListener("submit", handlePostFormSubmit);
// end of function//

// Card Delete event listeners:
deleteModalCloseBtn.addEventListener("click", function () {
  closeModal(confirmDeleteModal);
});
cancelDeleteBtn.addEventListener("click", function () {
  closeModal(confirmDeleteModal);
});

//card selection variables:
let selectedCard;
let selectedCardId;

//get card element function:
function getCardElement(data) {
  const cardElement = cardTemplate.content
    .querySelector(".card")
    .cloneNode(true);

  const cardCaptionElement = cardElement.querySelector(".card__caption");
  const cardImageElement = cardElement.querySelector(".card__image");
  const cardLikeBtn = cardElement.querySelector(".card__like-button");
  const cardDelBtn = cardElement.querySelector(".card__delete-button");

  //Like Button
  if (data.isLiked) {
    cardLikeBtn.classList.add("card__like-button_active");
  }

  cardLikeBtn.addEventListener("click", function () {
    const isLiked = cardLikeBtn.classList.contains("card__like-button_active");
    if (!isLiked) {
      api
        .likeCard(data._id)
        .then((cardLiked) => {
          console.log("Liked:", cardLiked);
          cardLikeBtn.classList.toggle("card__like-button_active");
        })
        .catch((err) => {
          console.error("Failed to like", err);
        });
    } else {
      api
        .unlikeCard(data._id)
        .then((cardUnliked) => {
          console.log("Unliked:", cardUnliked);
          cardLikeBtn.classList.toggle("card__like-button_active");
        })
        .catch((err) => {
          console.error("Failed to unlike", err);
        });
    }
  });

  //Delete button
  cardDelBtn.addEventListener("click", function () {
    selectedCard = cardElement;
    selectedCardId = data._id;
    openModal(confirmDeleteModal);
  });

  //Card preview
  cardImageElement.addEventListener("click", function () {
    previewCardImageEl.src = data.link;
    previewCardImageEl.alt = data.name;
    previewCardCaptionEl.textContent = data.name;
    openModal(previewCardModal);
  });

  //Populate card
  cardImageElement.src = data.link;
  cardImageElement.alt = data.name;
  cardCaptionElement.textContent = data.name;

  return cardElement;
} //end of get card element function

function handleAvatarSubmit(evt) {
  evt.preventDefault();
  saveAvatarBtn.textContent = "Saving...";
  console.log(avatarModalInput.value);
  api
    .updateUserAvatar({ avatar: avatarModalInput.value })
    .then((updatedAvatar) => {
      const avatar = avatarModalInput.value;
      profileAvatar.src = updatedAvatar.avatar;
      return avatar;
    })
    .catch((err) => {
      console.error("Failed to update avatar:", err);
    })
    .finally(() => {
      closeModal(editAvatarModal);
      avatarModalForm.reset();
      resetValidation(avatarModalForm, settings);
      saveAvatarBtn.textContent = "Save";
    });
}

function handleDeleteSubmit(evt) {
  evt.preventDefault();
  confirmDeleteBtn.textContent = "Deleting...";

  api
    .deleteCard(selectedCardId)
    .then(() => {
      selectedCard.remove();
    })
    .catch((err) => {
      console.error("Failed to delete card:", err);
    })
    .finally(() => {
      closeModal(confirmDeleteModal);
      confirmDeleteBtn.textContent = "Delete";
      console.log("Card deleted:", selectedCardId);
    });
}

// Confirm Delete Button trigger
confirmDeleteBtn.addEventListener("click", handleDeleteSubmit);

//new post events
newPostBtn.addEventListener("click", function () {
  openModal(newPostModal);

  const form = newPostModal.querySelector(settings.formSelector);
  resetValidation(form, settings);
});

modalPostCloseBtn.addEventListener("click", function () {
  closeModal(newPostModal);
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

enableValidation(settings);
