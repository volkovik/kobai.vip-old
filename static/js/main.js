const links = document.querySelector("#links")
const logo = document.querySelector("#logo");
const background = document.querySelector("#background");
const background_audio = new Audio("static/")

let clicksCount = 0;
let isEpilepsyEnabled = false;
let inverted = 0;
let hueRotate = 0;

logo.addEventListener("click", function () {
    // Toggle epileptic animation
    clicksCount++;

    if (clicksCount === 3) {
        clicksCount = 0;
        isEpilepsyEnabled = !isEpilepsyEnabled;

        if (!isEpilepsyEnabled) {
            hueRotate = 0;
            inverted = 0;
            background.style.filter = `hue-rotate(0deg) invert(0) brightness(0.7)`;
            logo.style.filter = `hue-rotate(0deg) invert(0)`;
            links.style.filter = `hue-rotate(0deg) invert(0)`;
        }
    }
});


setInterval(function () {
    // Color change animation
    if (isEpilepsyEnabled) {
        if (hueRotate >= 360) {
            hueRotate = 0;
        } else {
            hueRotate += 30;
        }

        background.style.filter = `hue-rotate(${hueRotate}deg)`;
    }
}, 1);

setInterval(function () {
    // Invert logo and links animation
    if (isEpilepsyEnabled) {
        if (inverted === 0) {
            inverted = 1;
        } else {
            inverted = 0;
        }

        logo.style.filter = `invert(${inverted})`;
        links.style.filter = `invert(${inverted})`;
    }
}, 100);


document.addEventListener("mousemove", function parallax(event) {
    // Parallax background
    const background = this.querySelector("#background");

    const x = (event.pageX - window.innerWidth / 2) / 300 * -1;
    const y = (event.pageY - window.innerHeight / 2) / 300 * -1;

    background.style.transform = `translateX(${x}px) translateY(${y}px) scale(1.1)`;
});