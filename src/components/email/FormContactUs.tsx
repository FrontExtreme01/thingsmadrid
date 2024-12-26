import { useState } from 'react';
import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';
import { useTranslatedPath } from '@/i18n/utils';

export default function FormContactUs({ i18n, lang }: any) {

    const [isSubmitting, setIsSubmitting] = useState(false);

    const translatedPath = useTranslatedPath(lang);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append('lang', lang);
 
        const { error } = await actions.sendEmail(formData);
        if (!error)
            navigate(translatedPath("/thank-you/"));
        else
            navigate(translatedPath("/error-send-email/"))

        setIsSubmitting(false);
    };

    return (
        <form onSubmit={handleSubmit} className="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4 text-left flex flex-wrap">
            <div className="w-full mb-6 px-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="name">
                    {i18n.LABELS.NAME}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="name" name="fullname" type="text" required placeholder={i18n.PLACEHOLDERS.NAME} />
            </div>
            <div className="w-full md:w-1/2 mb-6 px-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="phone">
                    {i18n.LABELS.PHONE}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="phone" name="phone" type="text" required placeholder={i18n.PLACEHOLDERS.PHONE} />
            </div>
            <div className="w-full md:w-1/2 mb-6 px-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="email">
                    {i18n.LABELS.EMAIL}
                </label>
                <input className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="email" name="email" type="email" required placeholder={i18n.PLACEHOLDERS.EMAIL} />
            </div>
            <div className="w-full mb-10 px-2">
                <label className="block text-gray-700 text-sm font-bold mb-2" htmlFor="message">
                    {i18n.LABELS.MESSAGE}
                </label>
                <textarea className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                    id="message" name="message" required placeholder={i18n.PLACEHOLDERS.MESSAGE}></textarea>
            </div>
            <div className="mx-auto flex items-center justify-between">
                <button disabled={isSubmitting} className="block w-fit bg-amber-400 hover:bg-amber-500 text-white font-bold py-4 px-10 rounded-lg focus:outline-none focus:shadow-outline disabled:bg-slate-200 disabled:text-slate-500 transition">
                    {isSubmitting ? i18n.BUTTON_PROCESS : i18n.BUTTON_SEND}
                </button>
            </div>
        </form>
    );
}