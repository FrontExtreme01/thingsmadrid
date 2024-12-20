import { useState } from "react";
import FormReservation from "./FormReservation";

export default function FormBookingMobile({ dataForm }: any) {

    const [isOpen, setIsOpen] = useState(false);
    const toggleModal = () => {
        setIsOpen(!isOpen);
    };

    return (
        <>
            <div className="md:hidden flex justify-center items-center sticky bottom-6">
                <button className="w-4/6 sm:w-1/2 p-3 rounded-3xl shadow-md shadow-black/[0.4] bg-sky-900 text-white hover:bg-sky-900/[0.9] font-bold text-base uppercase" onClick={toggleModal}>
                    {dataForm.i18n.BUTTON_MODAL}
                </button>
            </div>
            {isOpen && (
                <>
                    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 transition-all z-[5000]" onClick={toggleModal}></div>
                    <div className="fixed top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] z-[5001] bg-white w-11/12 overflow-y-scroll h-5/6 py-7 px-5 rounded shadow-lg">
                        <button className="absolute top-5 right-5 text-red-700 text-xl" onClick={toggleModal}>
                            <i className="at-xmark-circle"></i>
                        </button>
                        <FormReservation dataForm={dataForm} />
                    </div>
                </>
            )
            }
        </>
    );
}