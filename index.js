const imageContainer = document.getElementsByClassName("image");
const text = document.getElementsByTagName('p');
console.dir(text);
let counter = 0;
let isCounterOutOfLimits = false;
const timerToBeSet = 5000;

const timer = setInterval(() => {
    slideShow();
}, timerToBeSet);

function slideShow() {
    for (let i = 0; i < imageContainer.length; i++) {
        if (text[i].classList.contains('bold')) {
            console.log('in it');
            text[i].classList.remove('bold');
        }
        if (counter == i) {
            if (imageContainer[i].classList.contains('inactive')) {
                imageContainer[i].classList.remove('inactive');
            }
            text[i].classList.add('bold');
            continue;
        }
        !imageContainer[i].classList.contains('inactive') ? imageContainer[i].classList.add('inactive') : null;
    }
    if (counter + 1 >= imageContainer.length) {
        console.log('im in here')
        isCounterOutOfLimits = true;
        clearInterval(timer);
    } else {
        counter++;
    }
}

