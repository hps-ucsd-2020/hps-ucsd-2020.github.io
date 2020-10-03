var el = document.querySelector('.el');
el.innerHTML = 'test';

anime({
  targets: '.target',
  translateX: 500,
  rotate: '1turn',
  backgroundColor: '#FFF',
  color: '#000',
  duration: 2000,
  delay: 1000,
  loop: true
});
