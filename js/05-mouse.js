/*
 * mouseenter и mouseleave
 * mouseover и mouseout
 * mousemove (chatty event - болтливое событие)
 * Допмат по координатам: https://nerdparadise.com/programming/javascriptmouseposition
 */

const boxRef = document.querySelector('.js-box');

boxRef.addEventListener('mouseenter', event => {
  const box = event.target;

  box.classList.add('box--active');
});

boxRef.addEventListener('mouseleave', event => {
  const box = event.target;

  box.classList.remove('box--active');
});

// boxRef.addEventListener('mousemove', event => {
//   console.log(event);
// });
