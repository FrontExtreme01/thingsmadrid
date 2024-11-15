import logo from '../../img/logos/favicon.webp';

export default function FormBokun({ urlCalendar, price }: any) {

    return (
        <div className="w-full lg:w-4/12">
            <div className="w-full p-10 shadow-md border border-slate-200 rounded-2xl">
                <div className="flex justify-between flex-wrap space-y-5 md:space-y-0 mb-10">
                    <div className="w-full md:w-8/12">
                        <p className="text-slate-600 font-semibold text-md">Price from:</p>
                        <p className="text-6xl font-bold text-sky-900">${price}<span className="text-xl font-thin text-slate-600">€ /per person</span></p>
                    </div>
                    <img className="rounded-full h-20 w-20 object-cover" src={logo.src} alt="" />
                </div>
                <div className="bokunWidget" data-src={urlCalendar}></div>
            </div>
        </div>
    );
};