//App scripts
import AOS from 'aos';

export const SmoothScroll = () => {
  //   let animation;
  //   let currentDelay;

  //   const speed = 4;

  //   let scrollPosition = 0;
  //   let scrollDelayed = 0;
  //   let durration = 0.1;
  //   let wheel = 0;

  //   function animate() {
  //     let scrollY = 0;

  //     scrollY = scrollPosition - scrollDelayed;

  //     scrollDelayed = parseInt(scrollDelayed + scrollY * durration);

  //     document.documentElement.scrollTop = scrollDelayed;
  //     // window.scrollTo({ top: scrollPosition});

  //     console.log(scrollPosition);

  //     if (currentDelay == scrollDelayed) {
  //       cancelAnimationFrame(animation);
  //     } else {
  //       currentDelay = scrollDelayed;
  //       animation = requestAnimationFrame(animate);
  //     }
  //   }

  //   window.addEventListener(
  //     'wheel',
  //     (event) => {
  //       event.preventDefault();

  //       wheel = event.deltaY;
  //       scrollPosition = window.scrollY + wheel * speed;

  //       animation = requestAnimationFrame(animate);
  //     },
  //     {passive:false}
  //   );

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
