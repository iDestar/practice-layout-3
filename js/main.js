const burger = document.querySelector('.header__burger');
const siteNav = document.querySelector('.site__nav');
const closeNav = document.querySelector('.nav__list-close');
const headerImg = document.querySelector('.header__img');
const windowWidth = 800;

const burgerHandler = function () {
  siteNav.classList.add('site__nav-acite');
};

const closeNavHandler = function () {
  siteNav.classList.remove('site__nav-acite');
};

const imgHandler = function (size, windowWidth) {
  if (size < windowWidth) {
    headerImg.src = './img/BSPP2266-mobile.png';
  } else {
    headerImg.src = './img/BSPP2266.png';
  }
};

burger.addEventListener('click', burgerHandler);
closeNav.addEventListener('click', closeNavHandler);

const widthCheck = function () {
  imgHandler(window.innerWidth, windowWidth);
};
window.addEventListener('resize', () => {
  imgHandler(window.innerWidth, windowWidth);
});
widthCheck();

const smoothScroll = function (targetEl, duration) {
  let target = document.querySelector(targetEl);
  let targetPosition = target.getBoundingClientRect().top;
  let startPosition = window.pageYOffset;
  let startTime = null;

  const ease = function (t, b, c, d) {
    t /= d / 2;
    if (t < 1) return (c / 2) * t * t + b;
    t--;
    return (-c / 2) * (t * (t - 2) - 1) + b;
  };

  const animation = function (currentTime) {
    if (startTime == null) startTime = currentTime;
    const timeElapsed = currentTime - startTime;
    const run = ease(timeElapsed, startPosition, targetPosition, duration);
    window.scrollTo(0, run);
    if (timeElapsed < duration) requestAnimationFrame(animation);
  };

  requestAnimationFrame(animation);
};

const scrollTo = function () {
  const links = document.querySelectorAll('.site__nav-list-item-link');
  links.forEach((el) => {
    el.addEventListener('click', function () {
      const currentTarget = this.getAttribute('href');
      console.log();
      smoothScroll(currentTarget, 1000);
    });
  });
};

scrollTo();
