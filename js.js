console.log('Load');
let header = document.querySelector('.header');
let ham = document.querySelector('.ham');
let open = document.querySelector('.open');
let close = document.querySelector('.close');
let mobilemenu = document.querySelector('.mobile-res');

ham.addEventListener('click', () => {
  mobilemenu.classList.toggle('inset');
  header.classList.toggle('hide');

  close.style.display === 'block' || open.style.display === 'none'
    ? ((close.style.display = 'none'), (open.style.display = 'block'))
    : ((close.style.display = 'block'), (open.style.display = 'none'));
});
