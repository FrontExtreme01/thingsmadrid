import React, { useRef, useEffect, type PropsWithChildren } from 'react';

// Correctly handle the default export and named exports
import * as pkg from '@fancyapps/ui';
const { Fancybox: NativeFancybox } = pkg;
import '@fancyapps/ui/dist/fancybox/fancybox.css';

import type { OptionsType } from '@fancyapps/ui/types/Fancybox/options';

interface Props {
    options?: Partial<OptionsType>;
    delegate?: string;
}

function Fancybox(props: PropsWithChildren<Props>) {
    const containerRef = useRef(null);

    useEffect(() => {
        const container = containerRef.current;

        const delegate = props.delegate || '[data-fancybox]';
        const options = props.options || {};

        NativeFancybox.bind(container, delegate, options);

        return () => {
            NativeFancybox.unbind(container);
            NativeFancybox.close();
        };
    });

    return <div ref={containerRef}>{props.children}</div>;
}

export default Fancybox;
