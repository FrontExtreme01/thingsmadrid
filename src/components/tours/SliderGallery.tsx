import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/effect-fade';
import { Navigation, Autoplay } from 'swiper/modules';
import Fancybox from '@/utils/Fancybox';

// Importar CSS Module
import styles from '@/styles/gallery.module.css';

export default function SliderGallery({ images, accessibility }: any) {
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
                    modules={[Navigation, Autoplay]}
                    className={`mySwiper ${styles.sliderGallery}`}
                >
                    {images.map((image: any, index: number) => (
                        <SwiperSlide key={index}>
                            <img 
                            className={styles.imgGallery} 
                            src={image.src} 
                            alt={accessibility.altImg} 
                            loading={index == 0 ? 'eager' : 'lazy'} 
                            decoding="async" 
                            width="1920"
                            height="1080"
                            srcSet={`${image.src} 240w, ${image.src} 600w, ${image.src} 720w, ${image.src} 840w, ${image.src} 994w `}
                            sizes={`(max-width: 360px) 240px, (max-width: 640px) 600px, (max-width: 768px) 720px, (max-width: 1024px) 840px,  ${image.width}px`}
                            />
                            <a data-fancybox="gallery" href={image.src} aria-label={accessibility.ariaLabelGallery}>
                                <i className={`${styles.iconZoom} at-magnifying-glass-plus`}></i>
                            </a>
                        </SwiperSlide>
                    ))}

                </Swiper>
            </div>
        </Fancybox>
    );
}
