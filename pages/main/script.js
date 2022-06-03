
let modalClose = document.querySelector('.modal__close');
let popupDf = document.querySelector('.popup');
let modalOpen = document.querySelectorAll('.friend__card');


modalOpen.forEach(btn => {
  btn.addEventListener('click', () => {
    popupDf.classList.add('open');
    document.getElementsByTagName("body")[0].style.overflow = 'hidden';
  })
})

modalClose.addEventListener('click', () => {
  popupDf.classList.remove('open');
  document.getElementsByTagName("body")[0].style.overflow = 'auto';
})

///////carousel

const BTN_LEFT = document.querySelector('#slider__left');
const BTN_RIGHT = document.querySelector('#slider__right');
const CAROUSEL = document.querySelector('#carousel');
const ITEM_LEFT = document.querySelector('#friends__cards-left');
const ITEM_RIGHT = document.querySelector('#friends__cards-right');



const moveLeft = () => {
  CAROUSEL.classList.add('transition__left');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
}

const moveRight = () => {
  CAROUSEL.classList.add('transition__right');
  BTN_LEFT.removeEventListener('click', moveLeft);
  BTN_RIGHT.removeEventListener('click', moveRight);
};

BTN_LEFT.addEventListener('click', moveLeft);
BTN_RIGHT.addEventListener('click', moveRight);

CAROUSEL.addEventListener('animationend', (animationEvent) => {
  console.log(animationEvent)
  if (animationEvent.animationName === 'move-left') {
    CAROUSEL.classList.remove('transition__left');
    const leftItems = ITEM_LEFT.innerHTML;
    document.querySelector('#friends__cards-active').innerHTML = leftItems;
  } else {
    CAROUSEL.classList.remove('transition__right');
    const RightItems = ITEM_RIGHT.innerHTML;
    document.querySelector('#friends__cards-active').innerHTML = RightItems;
  };
  BTN_LEFT.addEventListener('click', moveLeft);
  BTN_RIGHT.addEventListener('click', moveRight);
})

///////burger

const menuBurgO = document.querySelector('.menu__burger');
const closeMenuBurg = document.querySelector('.menu');
const closeActiveMenu = document.querySelector('.menu__item');
const closeActiveMenu1 = document.querySelector('.menu__item-third');
const closeActiveMenu2 = document.querySelector('.menu__item-four');

menuBurgO.addEventListener('click', () => {
  menuBurgO.classList.toggle('active__menu');
  closeMenuBurg.classList.toggle('menu__db');
  document.body.classList.toggle('lock');
})

closeMenuBurg.addEventListener('click', () => {
  closeMenuBurg.classList.remove('menu__db');
  document.body.classList.remove('lock');
  menuBurgO.classList.remove('active__menu');
})

closeActiveMenu.addEventListener('click', () => {
  closeMenuBurg.classList.remove('menu__db')
  document.body.classList.remove('lock');
  menuBurgO.classList.remove('active__menu');
})

closeActiveMenu1.addEventListener('click', () => {
  closeMenuBurg.classList.remove('menu__db')
  document.body.classList.remove('lock');
  menuBurgO.classList.remove('active__menu');
})

closeActiveMenu2.addEventListener('click', () => {
  closeMenuBurg.classList.remove('menu__db')
  document.body.classList.remove('lock');
  menuBurgO.classList.remove('active__menu');
})



/////////




