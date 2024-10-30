import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import { Autoplay } from 'swiper/modules';

export default function Partners({ partners }: any) {
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
                {partners.map((part: any) => (
                    <SwiperSlide key={part.id}>
                        <img src={part.imagen.src} alt={part.title} decoding="async" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
