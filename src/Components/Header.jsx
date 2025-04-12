import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import Aurora from '../bits/Aurora';
import TextPressure from '../bits/TextPressure';

const Header = () => {
    const handleAnimationComplete = () => {
        console.log('All letters have animated!');
    };

    return (
        <div className="position-relative vh-100 bg-dark text-white overflow-hidden">
            {/* Aurora Background */}
            <div className="position-absolute top-0 start-0 w-100 h-100">
                <Aurora
                    colorStops={[
                        "#b0c4de", "#dcdcdc", "#a9a9a9", "#2f4f4f"
                    ]}
                    blend={0.4}
                    amplitude={0.4}
                    speed={1.5}
                />
            </div>

            {/* Content */}
            <div className="position-relative d-flex flex-column align-items-center justify-content-center text-center px-3" style={{ height: '100%' }}>

                {/* TextPressure */}
                <div style={{ minHeight: '120px' }}>
                    <TextPressure
                        text="ViV!"
                        flex
                        italic
                        width
                        weight
                        alpha={false}
                        stroke={false}
                        textColor="#ffffff"
                        strokeColor="#ff0000"
                        minFontSize={300}
                    />
                </div>

                {/* Description */}
                <p className="lead mt-4" style={{ maxWidth: '600px' }}>
                    Unlock the power of visual interactions. Built with React, styled with soul.
                </p>

                {/* Search Input */}
                <div className="mt-4" style={{ maxWidth: '500px', width: '100%'}}>
                    <div className="input-group shadow-sm" style={{ height:'8vh' }}>
                        <input
                            type="text"
                            className="form-control rounded-pill border-0 px-4 py-2"
                            placeholder="Search..."
                            aria-label="Search"
                        />
                    </div>
                </div>
            </div>

            {/* Footer Text */}
            <div className="position-absolute bottom-0 w-100 text-center pb-3" style={{ zIndex: 2 }}>
                <small className="text-light">
                    Explore creativity at its finest. Your imagination is the limit.
                </small>
            </div>
        </div>
    );
};

export default Header;
