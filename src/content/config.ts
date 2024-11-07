// Importa las utilidades de `astro:content`
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
        gallery: z.array(z.string()),
        bokun: z.string(),
    })
});
// Exporta un solo objeto `collections` con las colecciones registradas
export const collections = {
    tours: toursCollection,
};