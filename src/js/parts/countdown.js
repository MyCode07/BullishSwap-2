const clockElems = document.querySelectorAll('.countdown');
const coronationBtn =document.querySelector('.coronation-btn');



function getTimeRemaining(endtime) {
    const t = Date.parse(endtime) - Date.parse(new Date());

    const seconds = Math.floor((t / 1000) % 60);
    const minutes = Math.floor((t / 1000 / 60) % 60);
    const hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    const days = Math.floor(t / (1000 * 60 * 60 * 24));

    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(clock) {
    const deadline = clock.dataset.deadline ? clock.dataset.deadline : 0

    if (deadline && deadline != '' && deadline != 0) {
        const time = Date.parse(deadline) - Date.parse(new Date());
        const seconds = Math.floor((time / 1000) % 60);
        const minutes = Math.floor((time / 1000 / 60) % 60);
        const hours = Math.floor((time / (1000 * 60 * 60)) % 24);
        const days = Math.floor(time / (1000 * 60 * 60 * 24));

        const dada = {
            'total': time,
            'days': days,
            'hours': hours,
            'minutes': minutes,
            'seconds': seconds
        };


        const daysElem = clock.querySelector('.days');
        const hoursElem = clock.querySelector('.hours');
        const minutesElem = clock.querySelector('.minutes');
        const secondsElem = clock.querySelector('.seconds');
        const coronationBtn = clock.closest('section').querySelector('.coronation-btn');

        function updateClock() {
            let t = getTimeRemaining(deadline);

            daysElem.innerHTML = t.days;
            hoursElem.innerHTML = ('0' + t.hours).slice(-2);
            minutesElem.innerHTML = ('0' + t.minutes).slice(-2);
            secondsElem.innerHTML = ('0' + t.seconds).slice(-2);

            if (t.total <= 0) {
                clearInterval(timeinterval);
                console.log(t.total);
                coronationBtn.classList.remove('coronation-btn')
                coronationBtn.classList.toggle('_button')
                coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
                coronationBtn.querySelector('label').innerHTML = 'Connect Wallet'
                coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
            }

            // if (t.total <= 100000000) {
            //     clearInterval(timeinterval);

            //     if (coronationBtn) {
            //         coronationBtn.classList.remove('coronation-btn')
            //         coronationBtn.classList.toggle('_button')
            //         coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
            //         coronationBtn.querySelector('label').innerHTML = 'Connect Wallet'
            //         coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
            //     }
            // }
        }

        let timeinterval = setInterval(updateClock, 1000);

        updateClock();
    } else {
        coronationBtn.classList.remove('coronation-btn')
        coronationBtn.classList.toggle('_button')
        coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
        coronationBtn.querySelector('label').innerHTML = 'Connect Wallet'
        coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
    }
}

export const clock = () => {
    if (!clockElems.length) return;
    clockElems.forEach(clock => {
        initializeClock(clock);
    })
}


