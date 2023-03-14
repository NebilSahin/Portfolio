//App scripts

export const SmoothScrollAnimate = () => {
  //variables
  let paralaxPosition = 0;
  let durration = 0.05;
  let scrollAmount = 6;
  let scrollDelayed = 0;
  let currentDelay = 0;
  let animation;

  //animation frame
  function animate() {
    let scrollY = 0;

    scrollY =
      document.querySelector('.app').getBoundingClientRect().top -
      scrollDelayed;

    //calculate the delay
    scrollDelayed = parseInt(scrollDelayed + scrollY * durration);

    //animate the background
    document.querySelector('.app-container').style.backgroundPosition =
      '50% ' + scrollDelayed / scrollAmount + 'px';

    //cancel the animation frame when animation is done
    if (currentDelay == scrollDelayed) {
      cancelAnimationFrame(animation);
    } else {
      currentDelay = scrollDelayed;
      animation = requestAnimationFrame(animate);
    }
  }

  //event listener when mouse wheel 
  window.addEventListener(
    'wheel',
    (event) => {
      event.preventDefault();

      paralaxPosition = document
        .querySelector('.app')
        .getBoundingClientRect().top;
      console.log(document.querySelector('#about').getBoundingClientRect().top);
      animation = requestAnimationFrame(animate);
    },
    { passive: false }
  );

  //observer to animate elements to fade in
  let observer = new IntersectionObserver((entries, observer) => {
    entries.forEach((entry) => {
      if (entry.isIntersecting) {
        entry.target.classList.add('aos-animate');
      }
    });
  });
  document.querySelectorAll('[data-aos]').forEach((aosElem) => {
    observer.observe(aosElem);
  });
};
