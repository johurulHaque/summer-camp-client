import React from 'react';
import useUser from '../../../hooks/useUser';
import PopularInstructorCard from './PopularInstructorCard';

const PopularInstructor = () => {
    const [users] = useUser();
  const  instructors = users.filter(user => user.role === 'instructor')
    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
        {
           instructors.map(instructor => <PopularInstructorCard key={instructor.id} instructor={instructor}></PopularInstructorCard>) 
        }
    </div>
    );
};

export default PopularInstructor;
