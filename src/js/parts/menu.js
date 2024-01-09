import { isMobile } from '../utils/isMobile.js';
import { lockPadding, unLockPadding } from '../utils/lockPadding.js';

const menu = document.querySelector('.header');
const burger = document.querySelector('.header__burger');
const multilanguage = document.querySelector('.multilanguage');
const menuLinks = document.querySelectorAll('.header nav li a');
const footerLinks = document.querySelectorAll('.footer nav li a');


if (burger && window.innerWidth <= 768) {
    burger.addEventListener('click', (е) => {
        burger.classList.toggle('_active');
        menu.classList.toggle('_open');
        document.body.classList.toggle('_noscroll');
        multilanguage.classList.toggle('_active');

        if (menu.classList.contains('_open')) {
            lockPadding();
        }
        else {
            unLockPadding()
        }
    })
}

if (menuLinks.length) {
    menuLinks.forEach(link => {
        const section = document.querySelector(`#${link.dataset.id}`);
        link.addEventListener('click', (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })

            if (burger && window.innerWidth <= 768) {
                if (!isMobile.any())
                    if (menu.classList.contains('_open')) unLockPadding();
                    else lockPadding()

                menu.classList.toggle('_open');
                burger.classList.toggle('_active');

                document.body.classList.toggle('_noscroll');
            }
        })
    })
}

if (footerLinks.length) {
    footerLinks.forEach(link => {
        const section = document.querySelector(`#${link.dataset.id}`);
        link.addEventListener('click', (e) => {
            e.preventDefault();
            section.scrollIntoView({
                behavior: 'smooth',
                block: 'center'
            })
        })
    })
}