import React, { useState, useEffect } from 'react';
import './PreLoader.css'

function PreLoader() {
    const [loaded, setLoaded] = useState(false);

    useEffect(() => {
        const handleLoad = () => {
            setTimeout(()=>{
                setLoaded(true);
            },400)
          
        };

        window.addEventListener('load', handleLoad);

        // Cleanup function to remove event listener on unmount
        return () => {
            window.removeEventListener('load', handleLoad);
        };
    }, []);

    return (
        !loaded ? (
            <div id="preloader">
                <div id="ventix-preloader" className={`ventix-preloader ${loaded ? 'loaded' : ''}`}>
                    <div className="animation-preloader">
                        <div className="spinner"></div>
                    </div>
                    <div className="loader">
                        <div className="row">
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-left">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                            <div className="col-3 loader-section section-right">
                                <div className="bg"></div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        ) : null
    );
}

export default PreLoader;
