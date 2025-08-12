const settings = {
  formSelector: ".modal__form",
  inputSelector: ".modal__input",
  submitButtonSelector: ".modal__submit-button",
  inactiveButtonClass: "modal__submit-button_inactive",
  inputErrorClass: "modal__input_type_error",
  errorClass: "modal__error_active",
};

const showInputError = (formElement, inputElement, errorMessage, settings) => {
  const errorMessageID = inputElement.id + "-error";
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  errorMessageElement.textContent = errorMessage;
  console.log(errorMessageID);
  errorMessageElement.classList.add(settings.errorClass);
  inputElement.classList.add(settings.inputErrorClass);
};

const hideInputError = (formElement, inputElement, settings) => {
  const errorMessageElement = formElement.querySelector(
    `#${inputElement.id}-error`
  );
  inputElement.classList.remove(settings.inputErrorClass);
  errorMessageElement.classList.remove(settings.errorClass);
};

const hasInvalidInput = (inputList) => {
  return inputList.some((inputElement) => {
    return !inputElement.validity.valid;
  });
};

const toggleButtonState = (inputList, buttonElement, settings) => {
  if (hasInvalidInput(inputList)) {
    buttonElement.disabled = true;
    buttonElement.classList.add(settings.inactiveButtonClass);
  } else {
    buttonElement.disabled = false;
    buttonElement.classList.remove(settings.inactiveButtonClass);
  }
};

const checkInputValidity = (formElement, inputElement, settings) => {
  console.log(inputElement.validationMessage);
  if (!inputElement.validity.valid) {
    showInputError(
      formElement,
      inputElement,
      inputElement.validationMessage,
      settings
    );
  } else {
    hideInputError(formElement, inputElement, settings);
  }
};

const setEventListeners = (formElement, settings) => {
  const inputList = Array.from(
    formElement.querySelectorAll(settings.inputSelector)
  );
  const buttonElement = formElement.querySelector(
    settings.submitButtonSelector
  );

  console.log(inputList);
  console.log(buttonElement);

  toggleButtonState(inputList, buttonElement, settings);

  inputList.forEach((inputElement) => {
    inputElement.addEventListener("input", function () {
      checkInputValidity(formElement, inputElement, settings);
      toggleButtonState(inputList, buttonElement, settings);
    });
  });
};

const enableValidation = (settings) => {
  const formList = document.querySelectorAll(settings.formSelector);
  formList.forEach((formElement) => {
    setEventListeners(formElement, settings);
  });
  console.log(formList);
};

// testing function for validation reset(buggy)
const resetValidation = (formElement, inputList, settings) => {
  inputList.forEach((input) => {
    hideInputError(formElement, input);
  });
};

enableValidation(settings);
