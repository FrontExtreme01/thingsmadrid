import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay, EffectFade } from 'swiper/modules';
import Fancybox from '@/utils/Fancybox';

// Importar CSS Module
import styles from '@/styles/gallery.module.css';

export default function SliderGallery({ images, altTitle }: any) {
    return (
        <Fancybox
            options={{
                Carousel: {
                    infinite: false,
                },
            }}
        >
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
                            <img src={image.src} alt={altTitle} loading={index == 0 ? 'eager' : 'lazy'} decoding="async" width={1920} height={1080} className={styles.imgGallery} />
                            <a data-fancybox="gallery" href={image.src}>
                                <i className={`${styles.iconZoom} at-magnifying-glass-plus`}></i>
                            </a>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Fancybox>
    );
}
