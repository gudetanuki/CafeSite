'use strict';
{
  const icon = document.querySelector('.hamburger-icon');
  const overlay = document.querySelector('.overlay');
  const line1 = document.querySelector('.line-first');
  const line2 = document.querySelector('.line-second');
  const line3 = document.querySelector('.line-third');
  const lines = [line1, line2, line3];
  console.log(lines);

  icon.addEventListener('click', () => {
    overlay.classList.toggle('show');
    line1.classList.toggle('open');
    line2.classList.toggle('open');
    line3.classList.toggle('open');
    
  });
}