import React, { useEffect } from 'react';

const LoadBokunScript = () => {
    useEffect(() => {
        const script = document.createElement('script');
        script.src = 'https://widgets.bokun.io/assets/javascripts/apps/build/BokunWidgetsLoader.js?bookingChannelUUID=6b1de543-f859-42f0-8332-446d14d349f4';
        script.async = true;
        document.body.appendChild(script);

        return () => {
            document.body.removeChild(script);
        };
    }, []);

    return null;
};

export default LoadBokunScript;