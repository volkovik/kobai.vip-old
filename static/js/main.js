const helloInDifferentLanguages = [
    "hello", "privet", "nǐ hǎo", "hola", "namaste", "olá", "marhabaan",
    "kon’nichiwa", "hyālō", "hallo", "yā", "ciao", "halløj", "yassou",
    "selam"
];

var logoClicksCount = 0;
var isEpilepsyAnimationEnabled = false;
var inverted = 0;
var hueRotate = 0;

function shuffle(array) {
    var currentIndex = array.length, temporaryValue, randomIndex;

    while (0 !== currentIndex) {
        randomIndex = Math.floor(Math.random() * currentIndex);
        currentIndex -= 1;
        temporaryValue = array[currentIndex];
        array[currentIndex] = array[randomIndex];
        array[randomIndex] = temporaryValue;
    }

    return array;
}

$(function () {
    // Shuffle labels and add to ticker blocks
    shuffle(helloInDifferentLanguages)
    helloInDifferentLanguages.forEach(word => {
        $("#top-block .ticker .ticker-content").append(`<span>${word}<\span>`)
    })
    shuffle(helloInDifferentLanguages)
    helloInDifferentLanguages.forEach(word => {
        $("#bottom-block .ticker .ticker-content").append(`<span>${word}<\span>`)
    })

    // Marquee labels in
    Marquee3k.init({selector: "ticker"})
})

$(document).mousemove(function (event) {
    // Parallax background image
    var x = (event.pageX - window.innerWidth / 2) / 300 * -1
    var y = (event.pageY - window.innerHeight / 2) / 300 * -1

    $("#background").css("transform", `translateX(${x}px) translateY(${y}px) scale(1.1)`)
    $("#background").css("z-index", "0")
})

$("#logo").click(function () {
    // Detect 3 clicks and start epilepsy animation
    logoClicksCount++

    if (logoClicksCount === 3) {
        logoClicksCount = 0
        isEpilepsyAnimationEnabled = !isEpilepsyAnimationEnabled

        if (!isEpilepsyAnimationEnabled) {
            hueRotate = 0
            inverted = 0

            $("#background").css("filter", "hue-rotate(0deg) invert(0) brightness(0.7)")
            $("#logo").css("filter", "hue-rotate(0deg) invert(0)")
            $("#links").css("filter", "hue-rotate(0deg) invert(0)")
            $(".ticker").css("filter", "hue-rotate(0deg) invert(0)")
        }
    }
})

setInterval(function () {
    // Invert logo and links animation
    if (isEpilepsyAnimationEnabled) {
        if (inverted === 0) {
            inverted = 1
        } else {
            inverted = 0
        }

        $("#logo").css("filter", `invert(${inverted})`)
        $("#links").css("filter", `invert(${inverted})`)
        $(".ticker").css("filter", `invert(${inverted})`)
    }
}, 100);

setInterval(function () {
    // Change color of logo and links animation
    if (isEpilepsyAnimationEnabled) {
        if (hueRotate >= 360) {
            hueRotate = 0
        } else {
            hueRotate += 30
        }

        $("#background").css("filter", `hue-rotate(${hueRotate}deg)`)
    }
}, 1)