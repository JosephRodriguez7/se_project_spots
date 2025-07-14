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
});

modalProfileCloseBtn.addEventListener("click", function () {
  editProfileModal.classList.remove("modal_is-opened");
});

//new post events
newPostBtn.addEventListener("click", function () {
  newPostModal.classList.add("modal_is-opened");
});

modalPostCloseBtn.addEventListener("click", function () {
  newPostModal.classList.remove("modal_is-opened");
});
