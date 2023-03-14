//Navbar functions
import Scrollbar from 'smooth-scrollbar';

//on hover affect for the menu
export const MenuHover = () => {
  //elements
  let menuButton = document.querySelector('.menu-button');
  let menuLine = document.querySelector('.menu-line');
  let link = document.querySelectorAll('.link');

  //on mouseover and out event
  menuButton.addEventListener('mouseover', function () {
    menuLine.classList.add('active');
    link.forEach((element) => {
      element.classList.add('active');
    });
  });
  menuButton.addEventListener('mouseout', function () {
    menuLine.classList.remove('active');
    link.forEach((element) => {
      if (element.classList.contains('link-top')) {
        element.classList.remove('active');
      } else if (element.classList.contains('link-bottom')) {
        element.classList.remove('active');
      }
    });
  });
  link.forEach((element) => {
    element.addEventListener('mouseover', function () {
      menuLine.classList.add('active');
      link.forEach((element) => {
        element.classList.add('active');
      });
    });
    element.addEventListener('mouseout', function () {
      menuLine.classList.remove('active');
      link.forEach((element) => {
        if (element.classList.contains('link-top')) {
          element.classList.remove('active');
        } else if (element.classList.contains('link-bottom')) {
          element.classList.remove('active');
        }
      });
    });
  });
};

export const LinkClick = () => {
  //document scrollbar element
  let scrollBar = Scrollbar.get(document.querySelector('.app-container'));

  //links
  let aboutLink = document.querySelector('#about-link');
  let skillsLink = document.querySelector('#skills-link');
  let projectsLink = document.querySelector('#projects-link');
  let contactLink = document.querySelector('#contact-link');
  let aboutContactLink = document.querySelector('#about-contact-link');
  let headerLink = document.querySelector('#header-projects-link');

  //section positions
  let aboutPosition = document
    .querySelector('#about')
    .getBoundingClientRect().top;
  let skillsPosition = document
    .querySelector('#skills')
    .getBoundingClientRect().top;
  let projectsPosition = document
    .querySelector('#projects')
    .getBoundingClientRect().top;
  let contactPosition = document
    .querySelector('#contact')
    .getBoundingClientRect().top;

  //event listners
  aboutLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, aboutPosition, 400);
  });
  skillsLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, skillsPosition, 400);
  });
  projectsLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, projectsPosition, 800);
  });
  contactLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, contactPosition, 1200);
  });

  //special  listener
  aboutContactLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, contactPosition, 1200);
  });
  headerLink.addEventListener('click', function (event) {
    scrollBar.scrollTo(0, projectsPosition, 800);
  });
};

export const NavbarWidth = () => {
  //elements
  let container = document.querySelector('.app');
  let navbar = document.querySelector('.nav-container');
  let containerStyle =
    container.currentStyle || window.getComputedStyle(container);
  navbar.style.width = containerStyle.width;

  window.addEventListener(
    'resize',
    () => {
      containerStyle =
        container.currentStyle || window.getComputedStyle(container);
      navbar.style.width = containerStyle.width;
    },
    true
  );
};
