//Header functions

//on hover affect for the Header
export const HeaderHover = () => {
  //elements
  let header = document.querySelector('.header-container');
  let photo = document.querySelector('.photo-container');
  let art = document.querySelector('.art-container');
  let img = document.querySelector('.img-container');

  let headerStyle = header.currentStyle || window.getComputedStyle(header);
  let windowExtrasSpace =
    parseInt(document.body.clientWidth) - parseInt(headerStyle.width);

  //on mouseover and out event
  header.addEventListener(
    'mousemove',
    function (event) {
      event.preventDefault();

      let offsetDistance =
        (event.clientX -
          (windowExtrasSpace / 2 + parseInt(headerStyle.width) / 2)) *
        0.4;

      let offsetDistance2 =
        (event.clientX -
          (windowExtrasSpace / 2 + parseInt(headerStyle.width) / 2)) *
        0.2;

      img.style.right = offsetDistance2 + 'px';

      if (
        event.clientX >=
        windowExtrasSpace / 2 + parseInt(headerStyle.width) / 2
      ) {
        photo.style.right = offsetDistance + 'px';
        photo.style.backdropFilter =
          'blur(' +
          (offsetDistance / parseInt(headerStyle.width)) * 100 +
          'px)';
      } else {
        art.style.right = offsetDistance + 'px';
        art.style.backdropFilter =
          'blur(' +
          (Math.abs(offsetDistance) / parseInt(headerStyle.width)) * 100 +
          'px)';
      }
    },
    true
  );
  header.addEventListener('mouseout', function () {
    img.style.right = '0px';
    photo.style.right = '0px';
    photo.style.backdropFilter = 'blur(0px)';
    art.style.right = '0px';
    art.style.backdropFilter = 'blur(0px)';
  });
};
