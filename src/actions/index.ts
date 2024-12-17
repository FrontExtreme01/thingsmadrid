import { ActionError, defineAction } from "astro:actions";

import { Resend } from "resend";

const resend = new Resend(import.meta.env.RESEND_API_KEY);

export const server = {
    send: defineAction({
        accept: "form",
        handler: async () => {
            const { data, error } = await resend.emails.send({
                from: "Madrid Contact <test@whattodoincancun.jhonnycanul.pro>",
                to: ["frontend.extreme@gmail.com"],
                subject: "Thanks for contacting us!",
                html: "<strong>Si salio en produccion?</strong>",
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
};
