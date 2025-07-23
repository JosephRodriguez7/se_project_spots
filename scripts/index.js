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

// for loop cards
initialCards.forEach(function (card) {
  console.log(card.name);
});

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
});

modalProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
  console.log("modalProfileCloseBtn was clicked");
});

//new post events
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
  console.log("newPostBtn was clicked");
});

modalPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
  console.log("modalPostCloseBtn was clicked");
});
