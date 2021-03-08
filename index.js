const sequenceName = document.getElementById('sequenceName');
const imageContainer = document.getElementsByClassName("image");

let timer = undefined;

// List of all the sequences
const sequence0 = document.getElementsByClassName('sequence_0');
const sequence1 = document.getElementsByClassName('sequence_1');
const sequence2 = document.getElementsByClassName('sequence_2');
const sequence3 = document.getElementsByClassName('sequence_3');
const sequence4 = document.getElementsByClassName('sequence_4');
const sequence5 = document.getElementsByClassName('sequence_5');
const sequence6 = document.getElementsByClassName('sequence_6');
// const sequence7 = document.getElementsByClassName('sequence_7');
// const sequence8 = document.getElementsByClassName('sequence_8');
// const sequence9 = document.getElementsByClassName('sequence_9');
// const sequence10 = document.getElementsByClassName('sequence_10');
// const sequence11 = document.getElementsByClassName('sequence_11');

// List of all the texts related to that sequence
const sequence0_text = document.getElementsByClassName('sequence_0_text');
const sequence1_text = document.getElementsByClassName('sequence_1_text');
const sequence2_text = document.getElementsByClassName('sequence_2_text');
const sequence3_text = document.getElementsByClassName('sequence_3_text');
// const sequence4_text = document.getElementsByClassName('sequence_4_text');
// const sequence5_text = document.getElementsByClassName('sequence_5_text');
// const sequence6_text = document.getElementsByClassName('sequence_6_text');
// const sequence7_text = document.getElementsByClassName('sequence_7_text');
// const sequence8_text = document.getElementsByClassName('sequence_8_text');
// const sequence9_text = document.getElementsByClassName('sequence_9_text');
// const sequence10_text = document.getElementsByClassName('sequence_10_text');
// const sequence11_text = document.getElementsByClassName('sequence_11_text');



const text = document.getElementsByTagName('p');
console.dir(text);
let counter = 0;
let isCounterOutOfLimits = false;
const timerToBeSet = 5000;


// const timer = setInterval(() => {
//     slideShow();
// }, timerToBeSet);



// function slideShow() {
//     for (let i = 0; i < imageContainer.length; i++) {
//         if (text[i].classList.contains('bold')) {
//             console.log('in it');
//             text[i].classList.remove('bold');
//         }
//         if (counter == i) {
//             if (imageContainer[i].classList.contains('inactive')) {
//                 imageContainer[i].classList.remove('inactive');
//             }
//             text[i].classList.add('bold');
//             continue;
//         }
//         !imageContainer[i].classList.contains('inactive') ? imageContainer[i].classList.add('inactive') : null;
//     }
//     if (counter + 1 >= imageContainer.length) {
//         console.log('im in here')
//         isCounterOutOfLimits = true;
//         clearInterval(timer);
//     } else {
//         counter++;
//     }
// }


function timerWrap(sequence_id, text_id) {
    timer = setInterval(() => {
        sequenceSlideShow(sequence_id, text_id)
    }, timerToBeSet);
}

function sequenceSlideShow(sequence_id, text_id) {
    for (let i = 0; i < sequence_id.length; i++) {
        if (text_id[i].classList.contains('bold')) {
            console.log('in it');
            text_id[i].classList.remove('bold');
        }
        if (counter == i) {
            if (sequence_id[i].classList.contains('inactive')) {
                sequence_id[i].classList.remove('inactive');
            }
            text_id[i].classList.add('bold');
            continue;
        }
        !sequence_id[i].classList.contains('inactive') ? sequence_id[i].classList.add('inactive') : null;
        !text_id[i].classList.contains('inactive') ? text_id[i].classList.add('inactive') : null;
    }
    if (counter + 1 >= sequence_id.length) {
        console.log('im in here')
        clearInterval(timer);
        counter = 0;
    } else {
        counter++;
    }
}


// timerWrap(sequence0, sequence0_text);
// createButton
// const button = document.getElementById('button');
// button.addEventListener('click', () => {
//     timerWrap(sequence1, sequence1_text);

// })

// inactivePreviousSlide(seq_text)

// timerWrap(sequence1, sequence1_text);


function createButton() {
    const btn = document.createElement('button');
    btn.id = 'breathing-button';
    btn.textContent = 'MOVE TO NEXT SEQUENCE';
    const buttonDiv = document.getElementById('button');
    buttonDiv.appendChild(btn);
}

function hideButton(button) {
    button.classList.add('inactive');
}

function showButton(button) {
    button.classList.remove('inactive');
}

function buttonEvent(button, seq, text) {
    button.addEventListener('click', () => {
        timerWrap(seq, text);
    });
}


function inactivePreviousSlide(text) {
    if (text instanceof Array) {
        text.map(text => text.classList.add('inactive'));
    }
}
