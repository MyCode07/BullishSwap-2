
let minusBtn = document.querySelector('.minus');
let count = document.querySelector('.input input');
let plusBtn = document.querySelector('.plus');

let countNum = 0;
count.innerHTML = countNum;

minusBtn.addEventListener("click", () => {
    if (countNum >= 1) {
        countNum -= 1;
        count.value = countNum;
        count.placeholder = countNum;
        plusBtn.style.pointerEvents = 'all';
    } if (countNum === 0) {
        minusBtn.style.pointerEvents = 'none';
    }


});

plusBtn.addEventListener("click", () => {
    countNum += 1;
    count.placeholder = countNum;
    count.value = countNum;
    minusBtn.style.pointerEvents = 'all';

    if (countNum === 3) {
        plusBtn.style.pointerEvents = 'none';
    } else {
        plusBtn.style.pointerEvents = 'all';
    }
});

