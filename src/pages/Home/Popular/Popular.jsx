import React, { useEffect, useState } from 'react';
import PopularCard from './PopularCard';
import useAllClasses from '../../../hooks/useAllClasses';


const Popular = () => {
    const [classes] = useAllClasses();
    console.log(classes)
    // const [sports,setSports] = useState([]);

    // useEffect(()=>{
    //     fetch('/sports.json')
    //     .then(res=> res.json())
    //     .then(data => {
    //         console.log(data)
    //         setSports(data)
    //     })

    // },[])
    // fetch('./sports.json')
    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                classes.slice(0,6).map((sport,indx) => <PopularCard key={indx} sport={sport}></PopularCard>)
            }

            
        </div>
    );
};

export default Popular;