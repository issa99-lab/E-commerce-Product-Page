'use strict';

const plus = document.querySelector('.fa-plus');
const minus = document.querySelector('.fa-minus');
const items = document.getElementById('numItem');
const addToCart = document.getElementById('addToCart');

const iconTbl = document.getElementById('icon');//the eventlistner icon at nav
const mainModal = document.getElementById('modal'); //the div
const closeModal = document.getElementById('close-modal'); //the close btn
const overlayH = document.getElementById('overlay'); //the overlayy


// HEY.. WAKE UP
// YOU CAN DO THIS :)
const openModal = function () {
  console.log('clicked');
  mainModal.classList.remove('hidden');
  overlayH.classList.remove('hidden');
}
const closeThatModal = function () {
  mainModal.classList.add('hidden');
  overlayH.classList.add('hidden');
}

//opening modal
iconTbl.addEventListener('click', openModal)

// closing modal..
closeModal.addEventListener('click', closeThatModal);
overlayH.addEventListener('click', closeThatModal);





let count = 0;
plus.addEventListener('click', function () {
  if (count < 10) {
    count++;
    items.innerText = count;
  }
});

minus.addEventListener('click', function () {
  if (count > 0) {
    count--;
    items.innerText = count;
  }
});