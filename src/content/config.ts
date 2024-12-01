import { z, defineCollection } from "astro:content";
// Define un `type` y un `schema` para cada colección
const toursCollection = defineCollection({
    type: 'content',
    schema: z.object({
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
        title: z.string(),
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

// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
    tours: toursCollection,
    restaurants: restaurantsCollection
};