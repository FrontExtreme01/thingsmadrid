import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/gallery.module.css';

export default function SliderGallery({ images }: any) {
    return (
        <div className="relative mb-10">
            <Swiper
                spaceBetween={5}
                pagination={{
                    el: "#containerBulletsGall",
                    type: "bullets",
                    bulletClass: `${styles.bulletSliderGall}`,
                    bulletActiveClass: `${styles.bulletSliderGallActive}`,
                    clickable: true,
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Pagination, Autoplay]}
                className={`mySwiper ${styles.sliderGallery}`}
            >
                {images.map((image: { src: string, alt: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <img src={image.src} alt={image.alt} loading='lazy' decoding="async" width={1920} height={1080} className={styles.imgGallery} />
                    </SwiperSlide>
                ))}
                
            </Swiper>
            <div id="containerBulletsGall" className={`${styles.containerBulletGall}`}></div>
        </div>
    );
}
