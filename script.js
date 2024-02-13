'use strict';

// Получаем элемент заголовка формы
const formHead = document.querySelector('.form-head');
// Получаем элементы с названием товара и кнопками заказа
const nameElement = document.querySelector('.name');
const orderButtons = document.querySelectorAll('.order-button');

// Функция для скрытия формы
function hideForm() {
  orderForm.style.display = 'none';
  for (let i = 0; i < orderButtons.length; i++) {
    orderButtons[i].textContent = 'Заказать';
  }
}

// Функция для показа формы
function showForm(cardName) {
  orderForm.style.display = 'block';
  formHead.textContent = `Введите данные для заказа ${cardName}`;
  orderButtons.forEach(function(button) {
    if (button === event.currentTarget) {
      button.textContent = 'Отмена';
    } else {
      button.textContent = 'Заказать';
    }
  });
}

// Добавляем обработчик клика на каждую кнопку order-button
orderButtons.forEach(function(button) {
  button.addEventListener('click', function(event) {
    const clickedButton = event.currentTarget;
    const card = clickedButton.closest('.card');
    const cardName = card.querySelector('.name').textContent;
    
    if (orderForm.style.display === 'none') {
      showForm(cardName);
    } else {
      hideForm();
    }
  });
});

// Получаем элементы из DOM
const orderForm = document.querySelector('.order-form_card');
const closeButton = document.querySelector('.close-button');

// Добавляем обработчик клика на кнопку закрытия closeButton
closeButton.addEventListener('click', function(event) {
  event.preventDefault();
  hideForm();
});