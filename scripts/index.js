//cards array
const initialCards = [
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
  editProfileModal.classList.add("modal_is-opened");
  console.log("editProfileBtn was clicked");
  profileNameInput.value = profileNameEl.textContent;
  profileDescriptionInput.value = profileDescriptionEl.textContent;
});

modalProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
  console.log("modalProfileCloseBtn was clicked");
});

//edit profile submission functions
function handleProfileFormSubmit(evt) {
  evt.preventDefault();
  profileNameEl.textContent = profileNameInput.value;
  profileDescriptionEl.textContent = profileDescriptionInput.value;
  editProfileModal.classList.remove("modal_is-opened");
}
editProfileModal.addEventListener("submit", handleProfileFormSubmit);
// end of function//

//new post submission functions
function handlePostFormSubmit(evt) {
  evt.preventDefault();
  newPostModal.classList.remove("modal_is-opened");
  console.log(postCaptionInput.value);
  console.log(postLinkInput.value);
}
newPostModal.addEventListener("submit", handlePostFormSubmit);

// end of function//

//new post events
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
  console.log("newPostBtn was clicked");
});

modalPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
  console.log("modalPostCloseBtn was clicked");
});

// for loop cards
initialCards.forEach(function (card) {
  console.log(card.name);
});
