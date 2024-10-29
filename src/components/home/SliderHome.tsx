import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/slider.module.css';

const slides = [
    { id: 1, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/slider/atletico-de-madrid-stadium-and-museum-tour.webp" },
    { id: 2, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/slider/iberian-ham-and-wine-tasting-in-madrid-tours-and-activities.webp" },
    { id: 3, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/slider/chambao-madrid-best-restaurant-to-eat-spanish-cuisine.webp" }
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
                        <img className={styles.imgSlider} src={slide.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div id="containerForBullets" className={`${styles.containerBullet}`}></div>
        </div>
    );
}
