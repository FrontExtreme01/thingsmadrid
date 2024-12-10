import React, { lazy, Suspense, useState } from 'react';

export default function BtnBookModal({ urlCalendar, i18n, titleAct }: any) {
    const LazyLoadBokunScript = lazy(() => import('@/utils/LoadBokunScript'));

    const [isOpen, setIsOpen] = useState(false);

    const toggleModal = () => {
        setIsOpen(true);
    };

    return (
        <>
            <button className="md:hidden fixed left-[50%] translate-x-[-50%] bottom-6 w-1/2 p-3 rounded-3xl shadow-md shadow-black/[0.4] bg-sky-900 text-white hover:bg-sky-900/[0.9] font-bold text-xl uppercase" onClick={toggleModal}>
                {i18n.TOUR_PAGE.DETAIL_TOUR.BTN_BOOK_NOW}
            </button>
            {isOpen && (
                <>
                    <Suspense fallback={<div>Loading...</div>}>
                        <LazyLoadBokunScript />
                    </Suspense>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all z-[5000]" onClick={toggleModal}></div>
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[5001] bg-white w-5/6 overflow-y-scroll h-5/6 p-7 rounded shadow-lg">
                        <h2 className="text-xl mb-4 font-bold">{titleAct}</h2>
                        <p className="text-sm">{i18n.TOUR_PAGE.DETAIL_TOUR.TEXT_MODAL}</p>
                        <div className="bokunWidget mb-10" data-src={urlCalendar}></div>
                        <button className="absolute top-5 right-5 text-red-700 text-xl" onClick={toggleModal}>
                            <i className="at-xmark-circle"></i>
                        </button>
                    </div>
                </>
            )}
        </>
    );
}