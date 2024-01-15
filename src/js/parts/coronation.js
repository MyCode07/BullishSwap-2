
let minusBtn = document.querySelector('.minus');
let count = document.querySelector('.input input');
let plusBtn = document.querySelector('.plus');

if (minusBtn) {
    let countNum = 0;
    const max = +count.max;
    const min = +count.min;

    minusBtn.addEventListener("click", () => {
        if (countNum >= 1) {
            countNum -= 1;
            count.value = countNum;
            count.placeholder = countNum;
            plusBtn.style.pointerEvents = 'all';
        }
        if (countNum === min) {
            minusBtn.style.pointerEvents = 'none';
        }
    });

    plusBtn.addEventListener("click", () => {
        countNum += 1;
        count.placeholder = countNum;
        count.value = countNum;
        minusBtn.style.pointerEvents = 'all';

        if (countNum === max) {
            plusBtn.style.pointerEvents = 'none';
        }
        else {
            plusBtn.style.pointerEvents = 'all';
        }
    });

}

