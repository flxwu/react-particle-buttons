(function() {
  const el = document.querySelector('.grid__item');
  const bttn = el.querySelector('button.particles-button');
  const bttnBack = el.querySelector('button.action');

  let particlesOpts = {
    type: 'triangle',
    easing: 'easeOutQuart',
    size: 6,
    particlesAmountCoefficient: 4,
    oscillationCoefficient: 2,
    color: function() {
      return Math.random() < 0.5 ? '#35538D' : '#FC9F79';
    }
  };
  particlesOpts.complete = () => {
    if (!buttonVisible) {
      anime.remove(bttnBack);
      anime({
        targets: bttnBack,
        duration: 300,
        easing: 'easeOutQuint',
        opacity: 1,
        scale: [0, 1]
      });
      bttnBack.style.pointerEvents = 'auto';
    }
  };
  const particles = new Particles(bttn, particlesOpts);

  let buttonVisible = true;
  bttn.addEventListener('click', () => {
    if (!particles.isAnimating() && buttonVisible) {
      particles.disintegrate();
      buttonVisible = !buttonVisible;
    }
  });
  
})();
