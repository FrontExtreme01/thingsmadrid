import { defineAction, ActionError } from "astro:actions";
import { z } from 'astro:schema';
import { Resend } from "resend";
import { experimental_AstroContainer } from 'astro/container';
import UserEmail from "@/components/email/UserEmailContactUs.astro";
import AdminEmail from "@/components/email/AdminEmail.astro"

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

            const emailAdminHtml = await container.renderToString(AdminEmail,
                { props: { fullName: input.fullname, message: input.message, email: input.email, phone: input.phone, date: new Date().toLocaleString() }, }
            );

            const emailUserHtml = await container.renderToString(UserEmail,
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
    })
};