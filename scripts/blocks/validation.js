const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: ".modal__submit-button_inactive",
  inputErrorClass: ".modal__input_type_error",
  errorClass: "modal__error_active",
};

const showInputError = (formElement, inputElement, errorMessage) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = errorMessage;
  console.log(errorMessageID);
  errorMessageElement.classList.add("modal__error_active");
  inputElement.classList.add("modal__input_type_error");
};

const hideInputError = (formElement, inputElement) => {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove("modal__input_type_error");
  errorMessageElement.classList.remove("modal__error_active");
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add("modal__submit-button_inactive");
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove("modal__submit-button_inactive");
  }
};

const checkInputValidity = (formElement, inputElement) => {
  console.log(inputElement.validationMessage);
  if (!inputElement.validity.valid) {
    showInputError(formElement, inputElement, inputElement.validationMessage);
  } else {
    hideInputError(formElement, inputElement);
  }
};

const setEventListeners = (formElement) => {
  const inputList = Array.from(formElement.querySelectorAll(".modal__input"));
  const buttonElement = formElement.querySelector(".modal__submit-button");

  console.log(inputList);
  console.log(buttonElement);

  toggleButtonState(inputList, buttonElement);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement);
      toggleButtonState(inputList, buttonElement);
    });
  });
};

const enableValidation = () => {
  const formList = document.querySelectorAll(".modal__form");
  formList.forEach((formElement) => {
    setEventListeners(formElement);
  });
  console.log(formList);
};

enableValidation(settings);
