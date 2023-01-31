"use strict";

const state = {
  email: "",
  password: "",
};

const buttonModalSignIn = document.querySelector(".button-sign-in");
const modal = document.querySelector(".modal");
const buttonModalClosed = document.querySelector(".modal__form-close");
const inputEmail = document.querySelector("#email");
const inputPassword = document.querySelector("#password");

const handleButtonClick = () => {
  modal.classList.replace("modal--closed", "modal--opened");
};

const handleButtonModalCloseClick = () => {
  modal.classList.replace("modal--opened", "modal--closed");
};

buttonModalSignIn.addEventListener("click", handleButtonClick);

buttonModalClosed.addEventListener("click", handleButtonModalCloseClick);

const handleChangeState = (e) => {
  const { value, name } = e.target;

  console.log(state, "before");

  state[name] = value;

  console.log(state, "after");
};

inputEmail.addEventListener("change", handleChangeState);
inputPassword.addEventListener("change", handleChangeState);
