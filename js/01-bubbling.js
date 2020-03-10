/*
 * Всплытие событие
 * Исходный элемпент: event.target и event.currentTarget
 */

const refs = {
  parent: document.querySelector('#parent'),
  child: document.querySelector('#child'),
  innerChild: document.querySelector('#inner-child'),
};

const parentClickHandler = event => {
  console.log('PARENT click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
};

const childClickHandler = event => {
  console.log('CHILD click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
};

const innerClickChildHandler = event => {
  console.log('INNER CHILD click handler');
  console.log('target: ', event.target);
  console.log('currentTarget: ', event.currentTarget);
};

refs.parent.addEventListener('click', parentClickHandler);
refs.child.addEventListener('click', childClickHandler);
refs.innerChild.addEventListener('click', innerClickChildHandler);
