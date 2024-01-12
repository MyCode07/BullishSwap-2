import Swiper from 'swiper';
import { Pagination, Autoplay, Grid, EffectCoverflow } from 'swiper/modules';

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
                    Pagination, Autoplay, EffectCoverflow
                ],

                slidesPerView: 5,
                centeredSlides: true,
                initialSlide: 2,
                pagination: {
                    el: pagination,
                    clickable: true
                },

                autoplay: {
                    delay: 1000,
                    disableOnInteraction: false,
                },
                speed: 600,

                breakpoints: {
                    300: {
                        slidesPerView: 2,

                    },
                    425: {
                        slidesPerView: 3,

                    },
                    769: {
                        slidesPerView: 4,
                    },
                    992: {
                        slidesPerView: 5,
                    }
                }

            })
        }
    })
}