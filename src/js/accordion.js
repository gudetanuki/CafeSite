'use strict';
{
  const question = document.querySelectorAll('.question-list-q');
  const answer = document.querySelectorAll('.question-list-a');
  
  question.forEach((ele, index) => {
    ele.addEventListener('click', () => {
      if(answer[index].classList.contains('open') === true) {
          answer[index].classList.remove('open');
      }
      else if (answer[index].classList.contains('open') === false) {
        answer[index].classList.add('open');
      }
    });
  });

}