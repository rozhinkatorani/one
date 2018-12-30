'use strict';

function random (x, y) {
  let randomNumber = x + Math.floor(Math.random() * y);

  return randomNumber;
}

alert(random(1, 5));
alert(random(1, 5));
