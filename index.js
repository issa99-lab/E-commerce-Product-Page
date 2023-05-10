'use strict';

const plus = document.querySelector('.fa-plus');
const minus = document.querySelector('.fa-minus');
const items = document.getElementById('numItem');
const addToCart = document.getElementById('addToCart');


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
