import { Swiper, SwiperSlide } from 'swiper/react';
import { Autoplay } from 'swiper/modules';
import 'swiper/css';

import part1 from '@/img/partners/1-stripe-logo.webp';
import part2 from '@/img/partners/2-expedia-logo.webp';
import part3 from '@/img/partners/3-viator-logo.webp';
import part4 from '@/img/partners/4-get-your-guide-logo.webp';
import part5 from '@/img/partners/6-bokun-logo.webp';
import part6 from '@/img/partners/amigo-tours-logo-partner.webp';
import part7 from '@/img/partners/atletico-de-madrid-logo-partner.webp';
import part8 from '@/img/partners/zuazo-gastroboutique-logo-partner.webp';

const partners = [
    { img: part1.src, alt: 'logo stripe' },
    { img: part2.src, alt: 'logo expedia' },
    { img: part3.src, alt: 'logo viator' },
    { img: part4.src, alt: 'logo get your guide' },
    { img: part5.src, alt: 'logo bokun' },
    { img: part6.src, alt: 'logo amigo tours' },
    { img: part7.src, alt: 'logo atletico de madrid' },
    { img: part8.src, alt: 'logo zuazo gastroboutique' },
]

export default function Partners({ title, description }: any) {

    return (
        <div className="py-10 px-5 md:px-24 container mx-auto text-center" data-aos="zoom-in" data-aos-delay="500">
            <h2 className="my-16 text-4xl text-sky-800 font-bold italic">{title}</h2>
            <p className="text-xl mb-10">
                {description}
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
                {partners.map((partner: any, index: number) => (
                    <SwiperSlide key={index}>
                        <img src={partner.img} alt={partner.alt} width="350" height="300" decoding="async" loading="lazy" />
                    </SwiperSlide>
                ))}
            </Swiper>
        </div>
    );
}
