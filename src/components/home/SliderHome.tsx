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
                {slides.map((slide: any, index: number) => (
                    <SwiperSlide key={index}>
                        <img
                            className={styles.imgSlider}
                            width="1920"
                            height="994"
                            src={slide.image.src}
                            alt={slide.title}
                            loading={index == 0 ? 'eager' : 'lazy'} 
                            decoding='async' 
                            srcSet={`${slide.image.src} 240w, ${slide.image.src} 600w, ${slide.image.src} 720w, ${slide.image.src} 840w, ${slide.image.src} 994w `}
                            sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${slide.image.width}px`}
                        />
                    </SwiperSlide>
                ))}
            </Swiper>
            <div id="containerForBullets" className={`${styles.containerBullet}`}></div>
        </div>
    );
}
