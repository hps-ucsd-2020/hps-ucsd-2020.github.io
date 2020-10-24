var selection = null;

var fade_in = anime({
  targets: '.fade-in',
  translateY: [-5, 0],
  opacity: [0, 1],
  delay: anime.stagger(50, {start: 100}),
  duration: 1000,
  easing: 'easeOutQuad'
})    

function expand(obj){
  anime({
    targets: obj,
    width: '96%',
    height: '40em',
    duration: 500,
    easing: 'easeInOutQuad'
  })
}

function contract(obj){
  anime({
    targets: obj,
    width: '80%',
    height: '4em',
    duration: 500,
    easing: 'easeInOutQuad'
  })
}

function select(obj){
  if(obj == selection) {
    // deselect
    selection.classList.remove("active-window");
    contract(selection);
    selection = null;
  } else {
    // select
    if(selection){
      selection.classList.remove("active-window");
      contract(selection);
    }
    selection = obj;
    selection.classList.add("active-window");
    expand(selection)
  }
}
