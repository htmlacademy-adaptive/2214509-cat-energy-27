
const menuBtn = document.querySelector('.menu__btn');
const menuNav = document.querySelector('.menu');

if (document.querySelector('.no-js')) {
  document.querySelector('.no-js').classList.remove('no-js');
}

if (menuBtn) {
  menuBtn.addEventListener('click', function (evt) {
    evt.preventDefault;
    menuNav.classList.toggle('menu--open');
  });
}
