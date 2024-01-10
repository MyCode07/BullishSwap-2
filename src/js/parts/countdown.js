const clockElems = document.querySelectorAll('.countdown');



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
    const days = clock.dataset.days ? clock.dataset.days : 0
    const deadline = new Date(Date.parse(new Date()) + days * 24 * 60 * 60 * 1000);

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
}

export const clock = () => {
    if (!clockElems.length) return;
    clockElems.forEach(clock => {
        initializeClock(clock);
    })
}


