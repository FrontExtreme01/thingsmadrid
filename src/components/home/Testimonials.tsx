import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/testimonial.module.css';

export default function Testimonials({testimonials}:any) {
    return (
        <div className="relative pt-5 pb-20 px-5 md:px-24 container mx-auto text-center" data-aos="fade-up" data-aos-delay="400">
            <h2 className="my-16 text-4xl text-sky-900 font-bold italic">Our Customer Reviews</h2>
            <Swiper
                pagination={{
                    el: "#containerBulletTestimonial",
                    type: "bullets",
                    bulletClass: `${styles.bulletTestimonial}`,
                    bulletActiveClass: `${styles.bulletTestimonialActive}`,
                    clickable: true,
                }}
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 1,
                        spaceBetween: 40
                    },

                    1200: {
                        slidesPerView: 3,
                    }
                }}
                modules={[Pagination, Autoplay]}
                className={`mySwiper ${styles.testimonialSwip}`}
            >
                {testimonials.map((test:any) => (
                    <SwiperSlide key={test.id} className={`${styles.testimonialSlide}`}>
                        <div className={`${styles.testimonialItem}`}>
                            <div className={`${styles.stars}`}>
                                <i className="at-star"></i><i className="at-star"></i><i className="at-star"></i><i className="at-star"></i><i className="at-star"></i>
                            </div>
                            <p>{test.text}</p>
                            <div>
                                <img src={test.img.src} className={`${styles.testimonialImg}`} height="200" width="200" alt={test.user} loading="lazy" />
                                <h3>{test.user}</h3>
                            </div>
                        </div>
                    </SwiperSlide>
                ))}
            </Swiper>
            <div id="containerBulletTestimonial" className={`${styles.containerBulletTestimonial}`}></div>
        </div>
    );
}
