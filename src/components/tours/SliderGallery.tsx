import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/gallery.module.css';

export default function SliderGallery({ images, altTitle }: any) {
    return (
        <div className="relative mb-10">
            <div className={styles.nextGall}>
                <i className="at-arrow-right"></i>
            </div>
            <div className={styles.prevGall}>
                <i className="at-arrow-left"></i>
            </div>
            <Swiper
                spaceBetween={5}
                effect={'fade'}
                navigation={{
                    nextEl: `.${styles.nextGall}`,
                    prevEl: `.${styles.prevGall}`,
                    disabledClass: `${styles.disabled}`
                }}
                autoplay={{
                    delay: 5000,
                    disableOnInteraction: false,
                }}
                modules={[Navigation, Autoplay, EffectFade]}
                className={`mySwiper ${styles.sliderGallery}`}
            >
                {images.map((image: { src: string }, index: number) => (
                    <SwiperSlide key={index}>
                        <img src={image.src} alt={altTitle} loading={index == 0 ? 'eager' : 'lazy'} fetchPriority={index == 0 ? 'high' : 'auto'} decoding="async" width={1920} height={1080} className={styles.imgGallery} />
                    </SwiperSlide>
                ))}

            </Swiper>
        </div>
    );
}
