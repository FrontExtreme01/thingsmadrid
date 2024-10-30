import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

import img1 from "../../img/partners/1-stripe-logo.webp"
import img2 from "../../img/partners/2-expedia-logo.webp"
import img3 from "../../img/partners/3-viator-logo.webp"
import img4 from "../../img/partners/4-get-your-guide-logo.webp"
import img5 from "../../img/partners/6-bokun-logo.webp"
import img6 from "../../img/partners/amigo-tours-logo-partner.webp"
import img7 from "../../img/partners/atletico-de-madrid-logo-partner.webp"
import img8 from "../../img/partners/zuazo-gastroboutique-logo-partner.webp"

const partners = [
    { id: 1, imagen: img1, title: "stripe" },
    { id: 2, imagen: img2, title: "expedia" },
    { id: 3, imagen: img3, title: "viator" },
    { id: 4, imagen: img4, title: "get your guide" },
    { id: 5, imagen: img5, title: "bokun" },
    { id: 6, imagen: img6, title: "amigo tours" },
    { id: 7, imagen: img7, title: "atletico de madrid" },
    { id: 7, imagen: img8, title: "zuazo gastroboutique" }
]

export default function Partners() {
    return (
        <div className="py-10 px-5 md:px-24 container mx-auto text-center">
            <h2 className="my-16 text-4xl text-sky-900 font-bold italic">Our Partners</h2>
            <p className="text-lg md:text-2xl mb-10">
                Our platform is supported by the technology and reliability of our partners to offer you the best service and guarantees in the tourism industry.
            </p>
            <Swiper
                loop={true}
                autoplay={{
                    delay: 4000,
                    disableOnInteraction: false,
                }}
                breakpoints={{
                    320: {
                        slidesPerView: 2,
                        spaceBetween: 40
                    },
                    480: {
                        slidesPerView: 3,
                        spaceBetween: 60
                    },
                    640: {
                        slidesPerView: 4,
                        spaceBetween: 80
                    },
                    992: {
                        slidesPerView: 5,
                        spaceBetween: 120
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {partners.map((part) => (
                    <SwiperSlide key={part.id}>
                        <img src={part.imagen.src} alt={part.title} decoding="async" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
