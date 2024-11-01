const slideshowElements = document.querySelectorAll(".slideshow-element");

let countElements = 0;
setInterval(() => {
    let currentElement = document.querySelector(".current");
    currentElement.classList.remove("current");

    countElements++;
    if (countElements >= slideshowElements.length) {
        slideshowElements[0].classList.add("current");
        countElements = 0;
    } else {
        currentElement.nextElementSibling.classList.add("current");
    }
}, 2000);
