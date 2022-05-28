// Legacy script after team-element.html update during 5/28/2022

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
  obj.querySelector('.teams-title').classList.toggle('expanded');
  obj.classList.toggle('expanded');
}

function contract(obj){
  obj.querySelector('.teams-title').classList.toggle('expanded');
  obj.classList.toggle('expanded');
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
