'use strict';
{
  const targets = document.querySelectorAll('.fadein');

  function callback(entries, obs) {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      entry.target.classList.add('appear');
      obs.unobserve(entry.target);
    });
  }

  const options = {
    threshold: 0.3,
    rootMargin: '0px 0px -100px',
  };

  const observer = new IntersectionObserver(callback, options);
  targets.forEach(target => {
    observer.observe(target);
  });
}