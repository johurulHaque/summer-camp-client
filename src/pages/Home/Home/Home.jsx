import React from 'react';
import Slider from '../Slider/Slider';
import Popular from '../Popular/Popular';

const Home = () => {
    return (
        <div>
            <Slider></Slider>
            <h2 className='text-3xl text-center mt-4 text-accent font-semibold'>---- Popular Classes ----</h2>
            <Popular></Popular>  
            <h2 className='text-3xl text-center mt-4 text-accent font-semibold'>---- Popular Instructors ----</h2>  

        </div>
    );
};

export default Home;