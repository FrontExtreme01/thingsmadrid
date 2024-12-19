import React, { useState } from 'react';
import { actions } from 'astro:actions';
import { navigate } from 'astro:transitions/client';
import { useTranslatedPath } from '@/i18n/utils';
import Calendar from 'react-calendar';
import 'react-calendar/dist/Calendar.css';

export default function FormBooking({ dataForm }: any) {

    const [counterAdults, setCounterAdults] = useState(1);
    const [counterChildren, setCounterChildren] = useState(0);
    const [isSubmitting, setIsSubmitting] = useState(false);

    const today = new Date();
    const minSelectableDate = new Date(today.setDate(today.getDate() + 1));
    const maxSelectableDate = new Date(today.setDate(today.getDate() + 100));

    const [value, setValue] = useState(minSelectableDate);
    const onChange = (date) => {
        setValue(date);
    };

    const translatedPath = useTranslatedPath(dataForm.lang);

    const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setIsSubmitting(true);

        const form = event.currentTarget;
        const formData = new FormData(form);
        formData.append('lang', dataForm.lang);
        formData.append('adults', counterAdults.toString());
        formData.append('childrens', counterChildren.toString());
        formData.append('nameReservation', dataForm.titleCard);
        formData.append('dateReservation', value.toString());
        formData.append('imgReservation', dataForm.image.url);
        formData.append('priceReservation', "none");

        for (let [key, value] of formData.entries()) {
            console.log(`${key}: ${value}`);
        }

        const { error } = await actions.formReservation(formData);
        if (!error)
            navigate(translatedPath("/thank-you/"));
        else
            navigate(translatedPath("/error-send-email/"))

        setIsSubmitting(false);
    };

    return (
        <div className="w-full lg:w-4/12">
            <div className="border border-slate-100 shadow p-5 sm:p-8 bg-white rounded-xl">
                <h3 className="text-2xl font-semibold mb-5">
                    <i className="at-restaurant-fork-knife"></i> {dataForm.i18n.TITLE}
                </h3>
                {/* Ficha Producto */}
                <div className="shadow-sm flex flex-wrap items-center rounded-xl border border-slate-200 my-10 p-2 sm:p-3">
                    <div className="w-4/12">
                        <img src={dataForm.image.url} alt={dataForm.image.alt} className="w-24 h-24 md:w-32 md:h-32 rounded-2xl object-cover" />
                    </div>
                    <div className="w-8/12 pl-2">
                        <p className="font-bold text-base">{dataForm.titleCard}</p>
                        <p className="text-sm text-slate-500 mt-3">
                            <i className="at-star-decor text-amber-500 font-bold"></i> <b>{dataForm.stars}</b> ({dataForm.reviews})
                        </p>
                    </div>
                </div>
                {/* Formulario de reserva */}
                <form className="flex flex-wrap" onSubmit={handleSubmit}>
                    <div className="w-full flex flex-wrap mb-6">
                        <div className="w-1/2 px-2">
                            <label className="font-bold text-lg text-slate-900" htmlFor="adults">{dataForm.i18n.LABELS.ADULTS}</label>
                            <div className="flex items-center mt-2">
                                {counterAdults > 1 && (
                                    <button type="button" onClick={() => setCounterAdults(counterAdults - 1)}
                                        className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                        -
                                    </button>
                                )}
                                <span className="text-xl font-bold mx-4">{counterAdults}</span>
                                <button type="button" onClick={() => setCounterAdults(counterAdults + 1)}
                                    className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                    +
                                </button>
                            </div>
                        </div>
                        <div className="w-1/2 px-2">
                            <label className="font-bold text-lg text-slate-900" htmlFor="children">{dataForm.i18n.LABELS.CHILDRENS}</label>
                            <div className="flex items-center mt-2">
                                {counterChildren > 0 && (
                                    <button type="button" onClick={() => setCounterChildren(counterChildren - 1)}
                                        className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                        -
                                    </button>
                                )}
                                <span className="text-xl font-bold mx-4">{counterChildren}</span>
                                <button type="button" onClick={() => setCounterChildren(counterChildren + 1)}
                                    className="bg-slate-200 text-slate-900 font-bold text-xl px-3 py-1 rounded-full focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300">
                                    +
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="px-2 w-full mb-6">
                        <label className="font-bold text-lg text-slate-900" htmlFor="date">{dataForm.i18n.LABELS.DATE}</label>
                        <Calendar
                            className="mt-2 rounded-2xl p-3 w-full-important"
                            value={value}
                            onChange={onChange}
                            minDate={minSelectableDate}
                            maxDate={maxSelectableDate}
                            locale={dataForm.lang}
                        />
                    </div>
                    <div className="px-2 w-full mb-6">
                        <label className="font-bold text-lg text-slate-900" htmlFor="fullname">{dataForm.i18n.LABELS.FULLNAME}</label>
                        <input required type="text" id="fullname" name="fullname" placeholder={dataForm.i18n.PLACEHOLDERS.FULLNAME} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                    </div>
                    <div className="px-2 w-full mb-6">
                        <label className="font-bold text-lg text-slate-900" htmlFor="phone">{dataForm.i18n.LABELS.PHONE}</label>
                        <input required type="text" id="phone" name="phone" placeholder={dataForm.i18n.PLACEHOLDERS.PHONE} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                    </div>
                    <div className="px-2 w-full mb-6">
                        <label className="font-bold text-lg text-slate-900" htmlFor="email">{dataForm.i18n.LABELS.EMAIL}</label>
                        <input required type="email" id="email" name="email" placeholder={dataForm.i18n.PLACEHOLDERS.EMAIL} className="mt-2 w-full bg-slate-100 rounded-2xl p-3 focus:outline-none focus:shadow-outline focus:border-slate-300 focus:ring-1 focus:ring-slate-300" />
                    </div>
                    <div className="px-2 w-full md:w-10/12 mt-5 mb-6 mx-auto">
                        <button disabled={isSubmitting} type="submit" className="w-full bg-amber-500 text-white font-bold text-lg px-5 py-4 rounded-2xl hover:bg-amber-600 focus:outline-none focus:shadow-outline focus:border-amber-300 focus:ring-1 focus:ring-amber-300">
                            {isSubmitting ? dataForm.i18n.BUTTON_PROCESS : dataForm.i18n.BUTTON_SEND}
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}