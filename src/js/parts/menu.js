import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const menu = document.querySelector('.header');
const burger = document.querySelector('.burger');
const multilanguage = document.querySelector('.multilanguage');


if (burger && window.innerWidth <= 768) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_active');
        multilanguage.classList.toggle('_active');

        if (menu.classList.contains('_active')) {
            lockPadding();
        }
        else {
            unLockPadding()
        }
    })
}

