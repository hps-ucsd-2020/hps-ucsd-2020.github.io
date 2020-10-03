var selection = null;

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
