// Logos
import favicon from "@/img/logos/favicon.webp";
import logoWhite from "@/img/logos/logo-footer-thigns-to-do-in-madrid.webp";
import logoMain from "@/img/logos/logo-horizontal.webp";

// Imagenes del slideHome En Inglés
import slideHomeEn1 from "@/img/home/slider/amazonia-adventure-park-near-madrid-zipline.webp";
import slideHomeEn2 from "@/img/home/slider/atletico-de-madrid-stadium-and-museum-tour.webp";
import slideHomeEn3 from "@/img/home/slider/chambao-madrid-best-restaurant-to-eat-spanish-cuisine.webp";
import slideHomeEn4 from "@/img/home/slider/iberian-ham-and-wine-tasting-in-madrid-tours-and-activities.webp";

// Imagenes del slideHome En Español
import slideHomeEs1 from "@/img/galleries/restaurants/chambao-madrid/best-restaurants-in-madrid.webp";
import slideHomeEs2 from "@/img/galleries/restaurants/chambao-madrid/best-restaurants-in-madrid.webp";
import slideHomeEs3 from "@/img/galleries/restaurants/chambao-madrid/best-restaurants-in-madrid.webp";
import slideHomeEs4 from "@/img/galleries/restaurants/chambao-madrid/best-restaurants-in-madrid.webp";

// Imagenes de Testimonios
import userTest1 from '@/img/testimonial/alex-martinez-jane-smith-cenotes-cancun-adventure-tour-experience-opinion.webp';
import userTest2 from '@/img/testimonial/cenotes9.webp';
import userTest3 from '@/img/testimonial/tequilatasting1.webp';

// Imagenes extra Banners en Inglés
import paymentMethEn from "@/img/home/verified-payment-methods-things-to-do-in-madrid.webp";
import serviceAdvanEn from "@/img/home/service-advantages-what-to-do-in-madrid.webp";
import madridBlogEN from "@/img/home/read-our-madrid-tours-travel-blog.webp";

//Imagenes extra Banners en Español
import paymentMethEs from "@/img/home/verified-payment-methods-things-to-do-in-madrid.webp";
import serviceAdvanEs from "@/img/home/verified-payment-methods-things-to-do-in-madrid.webp";;
import madridBlogEs from "@/img/home/verified-payment-methods-things-to-do-in-madrid.webp";

import excursions from "@/img/home/the-best-tours-in-madrid-things-to-do-activities-excursions.webp";
// Imagenes de Restaurantes
import opinionsImg from "@/img/opinions-and-reviews-from-trust-tripadvisor-foursquare-yelp-google-maps.webp";

const getImgFromLang = (lang: any) => {
    switch (lang) {
        case 'es':
            return {
                slideHome1: slideHomeEs1,
                slideHome2: slideHomeEs2,
                slideHome3: slideHomeEs3,
                slideHome4: slideHomeEs4,
                paymentMeth: paymentMethEs,
                serviceAdvan: serviceAdvanEs,
                madridBlog: madridBlogEs,
            };
        case 'en':
            return {
                slideHome1: slideHomeEn1,
                slideHome2: slideHomeEn2,
                slideHome3: slideHomeEn3,
                slideHome4: slideHomeEn4,
                paymentMeth: paymentMethEn,
                serviceAdvan: serviceAdvanEn,
                madridBlog: madridBlogEN,
            };
        default:
            return {
                slideHome1: slideHomeEs1,
                slideHome2: slideHomeEs2,
                slideHome3: slideHomeEs3,
                slideHome4: slideHomeEs4,
                paymentMeth: paymentMethEs,
                serviceAdvan: serviceAdvanEs,
                madridBlog: madridBlogEs,
            };
    }
}

export {
    getImgFromLang,
    userTest1,
    userTest2,
    userTest3,
    excursions,
    opinionsImg,
    favicon,
    logoWhite,
    logoMain
};