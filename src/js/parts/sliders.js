import Swiper from 'swiper';
import { Pagination, Autoplay, Grid } from 'swiper/modules';

const sliders = document.querySelectorAll('.swiper');

if (sliders.length) {
    sliders.forEach(slider => {
        const section = slider.closest('section');
        let pagination = section.querySelector('.pagination')

        if (section.classList.contains('mintanbull')) {
            new Swiper(slider, {
                modules: [
                    Pagination, Autoplay, Grid
                ],
                slidesPerView: 'auto',
                spaceBetween: 32,
                lazy: true,

                pagination: {
                    el: pagination,
                    clickable: true
                },

                autoplay: {
                    delay: 4000,
                    disableOnInteraction: false,
                },
                speed: 600,

                breakpoints: {
                    300: {
                        centeredSlides: true,
                        grid: false,
                        slidesPerGroup: 1,
                    },
                    769: {
                        centeredSlides: false,
                        grid: {
                            rows: 2,
                            fill: 'row',
                        },
                        slidesPerGroup: 4,
                    }
                }
            })
        }
        else if (section.classList.contains('influence')) {
            new Swiper(slider, {
                modules: [
                    Pagination, Autoplay
                ],

                loop: true,
                slidesPerView: 'auto',
                centeredSlides: true,

                pagination: {
                    el: pagination,
                    clickable: true
                },

                // autoplay: {
                //     delay: 4000,
                //     disableOnInteraction: false,
                // },
                // speed: 600,

            })
        }
    })
}