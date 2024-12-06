export const languages: Record<string, { code: string; name: string; }> = {
    es: {
        code: 'es',
        name: 'Español'
    },
    en: {
        code: 'en',
        name: 'English'
    }
};

export const defaultLang = 'es';
export const showDefaultLang = false;

export const ui = {
    es: {
        'nav.tours': 'Actividades',
        'nav.rest': 'Restaurantes',
        'nav.contact': 'Contacto',
        'nav.aboutUs': 'Sobre nosotros',
        'nav.terms': 'Términos de servicio',
        'nav.privacy': 'Política de privacidad',
        'footer.copyrigth': 'Todos los derechos reservados',
    },
    en: {
        'nav.tours': 'Tours',
        'nav.rest': 'Restaurants',
        'nav.contact': 'Contact',
        'nav.aboutUs': 'About us',
        'nav.terms': 'Terms of services',
        'nav.privacy': 'Privacy policy',
        'footer.copyrigth': 'All rights reserved',
    },
} as const;