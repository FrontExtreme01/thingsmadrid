import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/pagination';
import { Pagination, Autoplay } from 'swiper/modules';

// Importar CSS Module
import styles from '../../styles/testimonial.module.css';

const testimonial = [
    { id: 1, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/testimonials/home/tequilatasting1.webp", user: "Sarah Black", text: "The tour was perfect! The guide was knowledgeable, friendly, and engaging. The tour was well-paced and informative. I would definitely recommend it to anyone visiting Madrid." },
    { id: 2, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/testimonials/home/cenotes9.webp", user: "Susan Brown", text: "The tour was a great way to learn about the history and culture of Madrid. The guide was knowledgeable and enthusiastic, and the tour was well-organized" },
    { id: 3, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/testimonials/home/alex-martinez-jane-smith-cenotes-cancun-adventure-tour-experience-opinion.webp", user: "Peter Jones", text: "The tour was informative and well-organized, but it was a bit too long for my liking. I would have preferred a shorter tour that focused on the highlights." },
    { id: 4, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/testimonials/home/tequilatasting1.webp", user: "Sarah Black", text: "The tour was perfect! The guide was knowledgeable, friendly, and engaging. The tour was well-paced and informative. I would definitely recommend it to anyone visiting Madrid." },
]

export default function Testimonials() {
    return (
        <div className="relative py-20 px-0 md:px-24 container mx-auto text-center">
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
                {testimonial.map((test) => (
                    <SwiperSlide key={test.id} className={`${styles.testimonialSlide}`}>
                        <div className={`${styles.testimonialItem}`}>
                            <div className={`${styles.stars}`}>
                                <i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i><i className="fa-solid fa-star"></i>
                            </div>
                            <p>{test.text}</p>
                            <div>
                                <img src={test.img} className={`${styles.testimonialImg}`} alt="" />
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
