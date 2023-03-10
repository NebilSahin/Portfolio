//on hover affect for the Header
export const MouseBubble = () => {
    let container = document.querySelector("body");
    let mouseBubble = document.querySelector(".mouse-bubble");
    let mouseMessage = document.querySelector(".mouse-message");
    let mouseMessageStyle =
        mouseMessage.currentStyle || window.getComputedStyle(mouseMessage);

    let message = null;
    let mousePosition = {
        x: 0,
        y: 0,
    };

    let ballX = 0;
    let ballY = 0;

    let speed = 0.1;

    function animate() {
        let distX = 0;
        let distY = 0;

        if (message) {
            distX =
                mousePosition.x -
                parseInt(mouseMessageStyle.width) / 2 +
                10 -
                ballX;
            distY = mousePosition.y - 50 - ballY;
        } else {
            distX = mousePosition.x - ballX;
            distY = mousePosition.y - ballY;
        }

        ballX = ballX + distX * speed;
        ballY = ballY + distY * speed;

        mouseBubble.style.left = ballX + "px";
        mouseBubble.style.top = ballY + "px";

        requestAnimationFrame(animate);
    }

    function getTextWidth(text, font) {
        const canvas = getTextWidth.canvas || (getTextWidth.canvas = document.createElement("canvas"));
        const context = canvas.getContext("2d");
        context.font = font;
        const metrics = context.measureText(text);
        return metrics.width;
      }
      

    animate();

    container.addEventListener(
        "mousemove",
        function (event) {
            event.preventDefault();

            mousePosition = {
                x: event.pageX - 10,
                y: event.pageY - 10,
            };

            if (event.target.closest("[message]")) {
                message = event.target
                    .closest("[message]")
                    .getAttribute("message");
                mouseMessage.textContent = message;
                mouseMessage.style.width= '100%';
                mouseBubble.style.width = getTextWidth(message, "600 1rem sans-serif") + 40 + 'px';
                mouseBubble.style.height = 40 + "px";
            } else {
                message = null;
                mouseMessage.textContent = "";
                mouseMessage.style.width= '0%';
                mouseBubble.style.width = 20 + "px";
                mouseBubble.style.height = 20 + "px";
            }
        },
        true
    );
};
