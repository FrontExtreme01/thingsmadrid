import React from 'react';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/slider.module.css';

export default function SliderHome({ slides }: any) {
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
                {slides.map((slide: any) => (
                    <SwiperSlide key={slide.id}>
                        <img className={styles.imgSlider} width="1920" height="994" src={slide.img.src} alt={slide.title} loading={slide.carga} decoding="async" fetchPriority="high" srcSet={`${slide.img.src} 240, ${slide.img.src} 600, ${slide.img.src} 720, ${slide.img.src} 840, ${slide.img.src} 994 `} sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${slide.img.width}px`} />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div id="containerForBullets" className={`${styles.containerBullet}`}></div>
        </div>
    );
}
