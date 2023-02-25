//Navbar functions

//on hover affect for the menu
export const MenuHover = () => {
    //elements
    let menuButton = document.querySelector(".menu-button");
    let menuLine = document.querySelector(".menu-line");
    let link = document.querySelectorAll(".link");

    //on mouseover and out event
    menuButton.addEventListener("mouseover", function () {
        menuLine.classList.add("active");
        link.forEach((element) => {
            element.classList.add("active");
        });
    });
    menuButton.addEventListener("mouseout", function () {
        menuLine.classList.remove("active");
        link.forEach((element) => {
            if (element.classList.contains("link-top")) {
                element.classList.remove("active");
            } else if (element.classList.contains("link-bottom")) {
                element.classList.remove("active");
            }
        });
    });
    link.forEach((element) => {
        element.addEventListener("mouseover", function () {
            menuLine.classList.add("active");
            link.forEach((element) => {
                element.classList.add("active");
            });
        });
        element.addEventListener("mouseout", function () {
            menuLine.classList.remove("active");
            link.forEach((element) => {
                if (element.classList.contains("link-top")) {
                    element.classList.remove("active");
                } else if (element.classList.contains("link-bottom")) {
                    element.classList.remove("active");
                }
            });
        });
    });
};

export const NavbarWidth = () => {
    //elements
    let container = document.querySelector(".App");
    let navbar = document.querySelector(".nav-container");
    let containerStyle =
        container.currentStyle || window.getComputedStyle(container);
    navbar.style.width = containerStyle.width;

    window.addEventListener(
        "resize",
        () => {
            containerStyle =
                container.currentStyle || window.getComputedStyle(container);
            navbar.style.width = containerStyle.width;
        },
        true
    );
};
