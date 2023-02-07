"use strict";

const state = {
  email: "",
  password: "",
};

const buttonModalSignIn = document.querySelector(".button-sign-in");
const modal = document.querySelector(".modal");
const buttonModalClosed = document.querySelector(".modal__form-close");
const overlayModal = document.querySelector(".modal__overlay");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const handleCloseodalByEscape = (e) => {
  if (e.key === "Escape") {
    handleButtonModalCloseClick();
  }
};

const handleButtonClick = () => {
  modal.classList.replace("modal--closed", "modal--opened");
  document.addEventListener("keydown", handleCloseodalByEscape);
};

function handleButtonModalCloseClick() {
  modal.classList.replace("modal--opened", "modal--closed");
  document.removeEventListener("keydown", handleCloseodalByEscape);
}

buttonModalSignIn.addEventListener("click", handleButtonClick);

buttonModalClosed.addEventListener("click", handleButtonModalCloseClick);

overlayModal.addEventListener("click", handleButtonModalCloseClick);

const handleChangeState = (e) => {
  const { value, name } = e.target;

  console.log(state, "before");

  state[name] = value;

  console.log(state, "after");
};

inputEmail.addEventListener("change", handleChangeState);
inputPassword.addEventListener("change", handleChangeState);
