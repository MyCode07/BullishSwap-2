import { lockPadding, unLockPadding } from "../utils/lockPadding.js";
const popup = document.querySelector('.popup');
const popupOpenButtons = document.querySelectorAll('[data-open-popup]');

if (popup) {

    if (popupOpenButtons.length)
        popupOpenButtons.forEach(btn => {
            btn.addEventListener('click', function (e) {
                e.preventDefault();
                lockPadding()

                popup.classList.add('_open');
                document.body.classList.add('_noscroll');

            })
        })

    const popupClose = popup.querySelector('.popup__close');

    popupClose.addEventListener('click', function () {
        unLockPadding()

        popup.classList.remove('_open');
        document.body.classList.remove('_noscroll');
    })

    popup.addEventListener('click', function (e) {
        if (e.target.classList.contains('popup')) {
            unLockPadding()

            popup.classList.remove('_open')
            document.body.classList.remove('_noscroll');
        }
    })
}