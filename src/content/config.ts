import { z, defineCollection, getCollection } from "astro:content";
// Define un `type` y un `schema` para cada colección
const toursCollection = defineCollection({
    type: 'content',
    schema: z.object({
        lang: z.string().optional(),
        title: z.string(),
        description: z.string(),
        featured: z.string(),
        price: z.string(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        bokun: z.string(),
        calendar: z.string(),
        category: z.string(),
        location: z.string(),
        duration: z.string(),
        offered: z.string(),
        schedule: z.string(),
        availability: z.string(),
        cancelation: z.string(),
        meetingPoint: z.string(),
        difficulty: z.string(),
        mapFrame: z.string(),
        keywords: z.string(),
        testimonials: z.array(z.object({
            user: z.string(),
            review: z.string(),
            image: z.object({
                src: z.string(),
                alt: z.string()
            }),
        })),
    })
});

const restaurantsCollection = defineCollection({
    type: 'content',
    schema: z.object({
        lang: z.string().optional(),
        title: z.string(),
        description: z.string(),
        featured: z.string(),
        averageCost: z.string(),
        stars: z.string(),
        reviews: z.string(),
        image: z.object({
            url: z.string(),
            alt: z.string()
        }),
        location: z.string(),
        cuisine: z.string(),
        dressCode: z.string(),
        schedule: z.string(),
        availability: z.string(),
        mapFrame: z.string(),
        keywords: z.string(),
        testimonials: z.array(z.object({
            user: z.string(),
            review: z.string(),
            image: z.object({
                src: z.string(),
                alt: z.string()
            }),
        })),
    })
});

export const collections = {
    tours: toursCollection,
    restaurants: restaurantsCollection
};


// Funcion para obtener todos los restaurantes
export async function getAllRest(lang: string) {
    const restaurants = await getCollection('restaurants');
    return restaurants.filter((rest) => rest.data.lang === lang).map((rest) => {
            const rest_slug = rest.slug.split('/')[0];
            return {
                ...rest,
                rest_slug
            };
        });
}
// Funcion para obtener todos los tours
export async function getAllTours(lang: string) {
    const tours = await getCollection('tours');
    return tours.filter((tour) => tour.data.lang === lang).map((tour) => {
            const tour_slug = tour.slug.split('/')[0];
            return {
                ...tour,
                tour_slug
            };
        });
}