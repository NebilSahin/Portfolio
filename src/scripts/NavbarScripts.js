//Navbar functions

//on hover affect for the menu
export const MenuHover = () => {
  //elements
  let menuButton = document.querySelector('.menu-button');
  let menuLine = document.querySelector('.menu-line');
  let link = document.querySelectorAll('.link');

  //on mouseover and out event
  menuButton.addEventListener('mouseover', function () {
    menuLine.style.width = '80px';
    menuLine.style.backgroundColor = '80px';

    link.forEach((element) => {
      element.style.top = '0px';
    });
  });
  menuButton.addEventListener('mouseout', function () {
    menuLine.style.width = '20px';
    link.forEach((element) => {
      if (element.classList.contains('link-top')) {
        element.style.top = '-40px';
      } else if (element.classList.contains('link-bottom')) {
        element.style.top = '40px';
      }
    });
  });
  link.forEach((element) => {
    element.addEventListener('mouseover', function () {
      menuLine.style.width = '80px';
      link.forEach((element) => {
        element.style.top = '0px';
      });
    });
    element.addEventListener('mouseout', function () {
      menuLine.style.width = '20px';
      link.forEach((element) => {
        if (element.classList.contains('link-top')) {
          element.style.top = '-40px';
        } else if (element.classList.contains('link-bottom')) {
          element.style.top = '40px';
        }
      });
    });
  });
};
