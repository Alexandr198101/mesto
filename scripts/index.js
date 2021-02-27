
let popup = document.querySelector('.popup');
let buttonShow = document.querySelector('.button_type_edit');
let buttonClose = document.querySelector('.popup__button_type_close');
let formElement = document.querySelector('.popup__form');
let nameInput = document.querySelector('.popup__input_type_name');
let jobInput = document.querySelector('.popup__input_type_about');
let nameInfo = document.querySelector('.profile__author');
let jobInfo = document.querySelector('.profile__text');

function openPopup() {
  popup.classList.add('popup_opened');
  save();
}

function closePopup() {
  popup.classList.remove('popup_opened');
}

function formSubmitHandler (evt) {
  evt.preventDefault();
  nameInfo.textContent = nameInput.value;
  jobInfo.textContent = jobInput.value;
  closePopup();
}

function save() {
  nameInput.value = nameInfo.textContent;
  jobInput.value = jobInfo.textContent;
}

  buttonShow.addEventListener ('click', openPopup);
  buttonClose.addEventListener ('click', closePopup);
  formElement.addEventListener('submit', formSubmitHandler);