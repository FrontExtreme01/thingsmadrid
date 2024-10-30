import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/slider.module.css';

import img1 from '../../img/home/slider/amazonia-adventure-park-near-madrid-zipline.webp'
import img2 from '../../img/home/slider/atletico-de-madrid-stadium-and-museum-tour.webp'
import img3 from '../../img/home/slider/chambao-madrid-best-restaurant-to-eat-spanish-cuisine.webp'
import img4 from '../../img/home/slider/iberian-ham-and-wine-tasting-in-madrid-tours-and-activities.webp'

const slides = [
    { id: 1, img: img1, title: "amazonia adventure" },
    { id: 2, img: img2, title: "atletico madrid" },
    { id: 3, img: img3, title: "chambao restaurant" },
    { id: 3, img: img4, title: "iberian ham" }
]

export default function SliderHome() {
    return (
        <div className="relative">
            <Swiper
                spaceBetween={5}
                pagination={{
                    el: "#containerForBullets",
                    type: "bullets",
                    bulletClass: `${styles.bulletSliderHome}`,
                    bulletActiveClass: `${styles.bulletSliderHomeActive}`,
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={`mySwiper ${styles.sliderHome}`}
            >
                {slides.map((slide) => (
                    <SwiperSlide key={slide.id}>
                        <img className={styles.imgSlider} src={slide.img.src} alt={slide.title} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div id="containerForBullets" className={`${styles.containerBullet}`}></div>
        </div>
    );
}
