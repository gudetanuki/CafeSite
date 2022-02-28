'use strict';
{
  const question = document.querySelectorAll('.question-list-q');
  const answer = document.querySelectorAll('.question-list-a');
  
  question.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      answer[index].classList.add('open');
    });
  });
}