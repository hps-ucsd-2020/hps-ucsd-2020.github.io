var fade_in = anime({
  targets: ['.fade-in', '.slideshow'],
  translateY: [-5, 0],
  opacity: [0, 1],
  delay: anime.stagger(50, {start: 1000}),
  duration: 1000,
  easing: 'easeOutQuad'
})    
