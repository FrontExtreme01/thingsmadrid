import FormReservation from "./FormReservation";

export default function FormBookingDesktop({ dataForm }: any) {

    return (
        <div className="hidden md:block w-full lg:w-4/12">
            <div className="border border-slate-100 shadow p-5 sm:p-8 bg-white rounded-xl">
                <FormReservation dataForm={dataForm} />
            </div>
        </div>
    );
}