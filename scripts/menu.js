const menuButton_open = document.getElementById('menuButton_open');
const menuButton_close = document.getElementById('menuButton_close');
const menuWrapper = document.getElementById('menu');

menuButton_open.addEventListener('click', () => {
    menuWrapper.classList.add('menu--opened');
    document.body.style.overflow = 'hidden';
});

menuButton_close.addEventListener('click', () => {
    menuWrapper.classList.remove('menu--opened');
    document.body.style.overflow = '';
});