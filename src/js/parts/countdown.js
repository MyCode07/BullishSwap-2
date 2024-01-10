
const coronationSection = document.getElementById('coronation')
if (coronationSection) {

    const newDate = new Date('10-01-2024 10:00:00').getTime()
    console.log(newDate);
    const countdown = setInterval(() => {

        const date = new Date().getTime()
        const diff = newDate - date
        const coronationBtn = document.querySelector(".coronation-btn");

        const month = Math.floor((diff % (1000 * 60 * 60 * 24 * (365.25 / 12) * 365)) / (1000 * 60 * 60 * 24 * (365.25 / 12)))
        const days = Math.floor(diff % (1000 * 60 * 60 * 24 * (365.25 / 12)) / (1000 * 60 * 60 * 24))
        const hours = Math.floor(diff % (1000 * 60 * 60 * 24) / (1000 * 60 * 60))
        const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60))
        const seconds = Math.floor((diff % (1000 * 60)) / 1000)

        document.querySelector(".seconds").innerHTML = seconds < 10 ? '0' + seconds : seconds
        document.querySelector(".minutes").innerHTML = minutes < 10 ? '0' + minutes : minutes
        document.querySelector(".hours").innerHTML = hours < 10 ? '0' + hours : hours
        document.querySelector(".days").innerHTML = days < 10 ? '0' + days : days
        document.querySelector(".months").innerHTML = month < 10 ? '0' + month : month

        if (diff <= 0) {
            clearInterval(countdown)
            coronationBtn.classList.remove('coronation-btn')
            coronationBtn.classList.toggle('_button')
            coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
            coronationBtn.querySelector('label').innerHTML = 'Connect Wallet'
            coronationBtn.querySelector('label').dataset.ml = "coronation-btn-text";
        }

    }, 1000)

}
