import { useState, useEffect, useRef } from 'react';

export default function ShareSM({ site }: any) {
    const [isOpen, setIsOpen] = useState(false);
    const url = site;
    const popoverRef = useRef<HTMLDivElement>(null);

    const togglePopover = () => {
        setIsOpen(!isOpen);
    };

    const handleClickOutside = (event: MouseEvent) => {
        if (popoverRef.current && !popoverRef.current.contains(event.target as Node)) {
            setIsOpen(false);
        }
    };

    useEffect(() => {
        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        } else {
            document.removeEventListener('mousedown', handleClickOutside);
        }
        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    return (
        <div className="relative" ref={popoverRef}>
            <div
                className="rounded-full w-10 h-10 md:w-14 md:h-14 cursor-pointer bg-white border border-slate-100 shadow-md flex justify-center items-center duration-200 hover:bg-sky-900 group"
                onClick={togglePopover}
            >
                <i className="group-hover:text-white at-share text-black text-base md:text-xl"></i>
            </div>
            {isOpen && (
                <div className="absolute top-16 left-0 -translate-x-2/4 z-10 bg-white border border-slate-200 shadow-md rounded-lg p-4 w-32 h-max md:w-60 md:h-40 grid place-items-center">
                    <span className="font-semibold text-base my-2 block text-center">Share link to this page</span>
                    <div className="flex flex-col md:flex-row items-center flex-wrap justify-evenly gap-2 w-full">
                        <a href={`https://www.facebook.com/sharer/sharer.php?u=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-amber-400 shadow-sm">
                            <i className="at-facebook"></i>
                        </a>
                        <a href={`https://wa.me/?text=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-amber-400 shadow-sm">
                            <i className="at-whatsapp"></i>
                        </a>
                        <a href={`https://twitter.com/intent/tweet?url=${url}`} target="_blank" rel="noopener noreferrer" className="grid place-items-center rounded-full w-10 h-10 border border-slate-200 bg-white text-black hover:bg-amber-400 shadow-sm">
                            <i className="at-twitter"></i>
                        </a>
                    </div>
                </div>
            )}
        </div>
    );
}