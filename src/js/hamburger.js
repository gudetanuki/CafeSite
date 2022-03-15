'use strict';
{
  const icon = document.querySelector('.hamburger-icon');
  const overlay = document.querySelector('.overlay');

  icon.addEventListener('click', () => {
    overlay.classList.toggle('show');
    icon.classList.toggle('open');
  });
}