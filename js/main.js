const burger = document.querySelector('.header__burger');
const siteNav = document.querySelector('.site__nav');
const closeNav = document.querySelector('.nav__list-close');

const burgerHandler = function () {
  siteNav.classList.add('site__nav-acite');
};

const closeNavHandler = function () {
  siteNav.classList.remove('site__nav-acite');
};

burger.addEventListener('click', burgerHandler);
closeNav.addEventListener('click', closeNavHandler);
