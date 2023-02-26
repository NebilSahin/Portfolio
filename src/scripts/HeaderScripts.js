//Header functions

//on hover affect for the Header
export const HeaderHover = () => {
  //elements
  let header = document.querySelector('.header-container');
  let blur = document.querySelector('.blur');
  let headerStyle = header.currentStyle || window.getComputedStyle(header);
  let windowExtrasSpace =
    parseInt(document.body.clientWidth) - parseInt(headerStyle.width);

  let offsetDistance = 0;
  let mousePosition = 0;
  let mouseDelayed = 0;
  let speed = 0.1;
  let isAnimate = false;

  function animate() {

    let distX = mousePosition - mouseDelayed;

    mouseDelayed = mouseDelayed + (distX * speed);

    if (isAnimate) {
      offsetDistance = 140 - (mouseDelayed -
        (windowExtrasSpace / 2)) / parseInt(headerStyle.width) * 100;

      if (offsetDistance >= 100) {
        offsetDistance = 100;
      }
      blur.style.width = offsetDistance + "%";

    } else {
      blur.style.width = "63%";
    }

    requestAnimationFrame(animate);
  }

  animate();

  //on mouseover and out event
  header.addEventListener(
    'mousemove',
    function (event) {
      event.preventDefault();
      mousePosition = event.clientX;
      isAnimate = true;
    },
    true
  );

  //on mouse out event
  header.addEventListener('mouseout', function () {
    mousePosition = parseInt(headerStyle.width);
    isAnimate = false;
  });
};

//on hover affect for the Header image
export const PhotoMoveHover = (container, img, offset) => {
  const offsetAmount = offset;
  let containerElement = document.querySelector(container);
  let animatedElement = document.querySelector(img);
  let mousePosition = 0;
  let mouseDelayed = 0;
  let speed = 0.02;
  let isAnimate = false;

  let animatedElementStyle = animatedElement.currentStyle || window.getComputedStyle(animatedElement);
  let marginLeft = parseInt(animatedElementStyle.marginLeft);

  function animate() {

    let distX = mousePosition - mouseDelayed;

    mouseDelayed = mouseDelayed + (distX * speed);

    if (isAnimate) {
      let increaseX = (mouseDelayed - animatedElement.offsetLeft) / offsetAmount;
      animatedElement.style.left =  increaseX + 'px';

    } else {
      animatedElement.style.left = '0px';
    }

    requestAnimationFrame(animate);
  }

  animate();

  containerElement.addEventListener(
    'mousemove',
    function (event) {
      event.preventDefault();
      mousePosition = event.clientX;
      isAnimate = true;
    },
    true
  );
  containerElement.addEventListener('mouseout', function () {
    mousePosition = 0;
    isAnimate = false;
  });
};
