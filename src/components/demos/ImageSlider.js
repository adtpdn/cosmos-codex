import React, { useState, useRef } from 'react';
import { Card, Typography } from 'antd';

import bImage from '../../assets/before.png';
import aImage from '../../assets/after.png';

const { Text } = Typography;
const ImageSlider = ({ 
    beforeImage = bImage, 
    afterImage = aImage 
}) => {
    const [sliderPosition, setSliderPosition] = useState(50);
    const containerRef = useRef(null);

    const handleSliderChange = (e) => {
        setSliderPosition(e.target.value);
    };
    
    const sliderStyle = {
        position: 'absolute',
        top: 0,
        left: `${sliderPosition}%`,
        transform: 'translateX(-50%)',
        width: '3px',
        height: '100%',
        background: '#fff',
        cursor: 'ew-resize',
        boxShadow: '0 0 5px rgba(0,0,0,0.5)',
        zIndex: 20,
    };

    const containerStyle = {
        position: 'relative',
        width: '100%',
        maxWidth: '800px',
        margin: 'auto',
        aspectRatio: '16 / 9',
        overflow: 'hidden',
        borderRadius: '8px',
        boxShadow: '0 4px 12px rgba(0,0,0,0.15)',
    };
    
    const imageStyle = {
        position: 'absolute',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        objectFit: 'contain',
        pointerEvents: 'none',
    };

    return (
        <Card>
            <div ref={containerRef} style={containerStyle}>
                <div style={{...imageStyle, background: '#f0f2f5'}}>
                    <img src={beforeImage} alt="Before" style={imageStyle} />
                    <Text style={{ position: 'absolute', top: 10, left: 10, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '2px 8px', borderRadius: 4 }}>Before</Text>
                </div>
                <div 
                    style={{
                        ...imageStyle,
                        clipPath: `inset(0 ${100 - sliderPosition}% 0 0)`,
                        background: '#f0f2f5'
                    }}
                >
                    <img 
                        src={afterImage} 
                        alt="After" 
                        style={imageStyle} 
                    />
                    <Text style={{ position: 'absolute', top: 10, right: 10, background: 'rgba(0,0,0,0.5)', color: 'white', padding: '2px 8px', borderRadius: 4 }}>After</Text>
                </div>
                <div style={sliderStyle} />
                <input
                    type="range"
                    min="0"
                    max="100"
                    value={sliderPosition}
                    onChange={handleSliderChange}
                    style={{
                        position: 'absolute',
                        top: 0,
                        left: 0,
                        width: '100%',
                        height: '100%',
                        cursor: 'ew-resize',
                        opacity: 0,
                        zIndex: 30,
                    }}
                />
            </div>
        </Card>
    );
};

export default ImageSlider;
