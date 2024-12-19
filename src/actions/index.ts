import { defineAction, ActionError } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import { experimental_AstroContainer } from 'astro/container';
import AdminEmailContactUs from "@/components/email/AdminEmailContactUs.astro";
import AdminEmailReservations from "@/components/email/AdminEmailReservations.astro";
import UserEmailContactUs from "@/components/email/UserEmailContactUs.astro";
import UserEmailReservations from "@/components/email/UserEmailReservations.astro";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    sendEmail: defineAction({
        accept: "form",
        input: z.object({
            fullname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            message: z.string(),
            lang: z.any(),
        }),
        handler: async (input) => {

            const container = await experimental_AstroContainer.create();
            const subjectAdmin = "Nuevo mensaje de contacto";
            const subjectUser = input.lang === "es" ? "Gracias por contactarnos" : "Thank you for contacting us";

            const emailAdminHtml = await container.renderToString(AdminEmailContactUs,
                { props: { fullName: input.fullname, message: input.message, email: input.email, phone: input.phone, date: new Date().toLocaleString() }, }
            );

            const emailUserHtml = await container.renderToString(UserEmailContactUs,
                { props: { lang: input.lang, fullName: input.fullname }, }
            );

            await resend.emails.send({
                from: "Things To Do In Madrid <testmadrid@whattodoincancun.jhonnycanul.pro>",
                to: input.email,
                subject: subjectUser,
                html: emailUserHtml,
            });

            const { data, error } = await resend.emails.send({
                from: "Things To Do In Madrid <testmadrid@whattodoincancun.jhonnycanul.pro>",
                to: "frontend.extreme@gmail.com",
                subject: subjectAdmin,
                replyTo: input.email,
                html: emailAdminHtml,
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return data;
        },
    }),
    formReservation: defineAction({
        accept: "form",
        input: z.object({
            adults: z.string(),
            childrens: z.string(),
            fullname: z.string(),
            phone: z.string(),
            email: z.string().email(),
            lang: z.any(),
            nameReservation: z.string(),
            dateReservation: z.string(),
            imgReservation: z.string(),
            priceReservation: z.string(),
        }),
        handler: async (input) => {

            const container = await experimental_AstroContainer.create();
            const subjectAdmin = "Nueva reservación en Things To Do In Madrid";
            const subjectUser = input.lang === "es" ? "Tu Reservación fue realizada con éxito" : "Your reservation was successfully made";

            const emailAdminHtml = await container.renderToString(AdminEmailReservations,
                { props: { fullName: input.fullname, phone: input.phone, email: input.email, nameReservation: input.nameReservation, adults: input.adults, childrens: input.childrens, dateReservation: input.dateReservation, imgReservation: input.imgReservation, priceReservation: input.priceReservation, date: new Date().toLocaleString() }, }
            );

            const emailUserHtml = await container.renderToString(UserEmailReservations,
                { props: { lang: input.lang, fullName: input.fullname, adults: input.adults, childrens: input.childrens, dateReservation: input.dateReservation, nameReservation: input.nameReservation, imgReservation: input.imgReservation, priceReservation: input.priceReservation }, }
            );

            await resend.emails.send({
                from: "Things To Do In Madrid <testmadrid@whattodoincancun.jhonnycanul.pro>",
                to: input.email,
                subject: subjectUser,
                html: emailUserHtml,
            });

            const { data, error } = await resend.emails.send({
                from: "Things To Do In Madrid <testmadrid@whattodoincancun.jhonnycanul.pro>",
                to: "frontend.extreme@gmail.com",
                subject: subjectAdmin,
                replyTo: input.email,
                html: emailAdminHtml,
            });

            if (error) {
                throw new ActionError({
                    code: "BAD_REQUEST",
                    message: error.message,
                });
            }

            return data;
        }
    })
};