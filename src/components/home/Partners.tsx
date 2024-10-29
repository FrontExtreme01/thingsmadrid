import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

const partners = [
    { id: 1, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/atletico-de-madrid-logo-partner.webp" },
    { id: 2, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/zuazo-gastroboutique-logo-partner.webp" },
    { id: 3, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/3-viator-logo.webp" },
    { id: 4, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/6-bokun-logo.webp" },
    { id: 5, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/amigo-tours-logo-partner.webp" },
    { id: 6, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/atletico-de-madrid-logo-partner.webp" },
    { id: 7, img: "https://thingstodoinmadrid.jhonnycanul.pro/assets/img/logos/zuazo-gastroboutique-logo-partner.webp" },
]

export default function Partners() {
    return (
        <div className="py-10 px-0 md:px-24 container mx-auto text-center">
            <h2 className="my-16 text-4xl text-sky-900 font-bold italic">Our Partners</h2>
            <p className="text-lg mb-10">
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
                        slidesPerView: 6,
                        spaceBetween: 120
                    }
                }}
                modules={[Autoplay]}
                className="mySwiper"
            >
                {partners.map((part) => (
                    <SwiperSlide key={part.id}>
                        <img src={part.img} />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
