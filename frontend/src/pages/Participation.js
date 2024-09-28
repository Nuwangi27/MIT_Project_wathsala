import React, { useState, useEffect } from 'react';
import Navibar from '../components/Navibar';

const Participation = () => {
    const [imageSrc, setImageSrc] = useState('');

    useEffect(() => {
        let imageUrl = '';

        const fetchImage = async () => {
            try {
                const response = await fetch('http://localhost:5000/static/participation_chart.png');
                if (!response.ok) {
                    throw new Error('Failed to fetch image');
                }
                const imageData = await response.blob();
                imageUrl = URL.createObjectURL(imageData);
                setImageSrc(imageUrl);
                localStorage.setItem("img",imageUrl);
            } catch (error) {
                console.error('Error fetching image:', error.message);
            }
        };

        fetchImage();

        return () => {
            // Cleanup function to revoke the object URL when component unmounts
            URL.revokeObjectURL(imageUrl);
        };
    }, []); // Empty dependency array ensures the effect runs only once on mount

    const handleLogout = () => {
        // Clear the image source when the user logs out
        setImageSrc('');
    };

    return (
        <div>
            <Navibar handleLogout={handleLogout} />
            <div className='container2' style={{ width: 600 , height:445, marginTop:'10px'}}>
            {imageSrc && <img src={imageSrc} alt="Fetched" style={{ maxWidth: '100%', maxHeight: '100%' }} />}
           
            </div>
        </div>
    );
};

export default Participation;
