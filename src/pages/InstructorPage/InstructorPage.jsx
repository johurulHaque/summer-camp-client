import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import InstructorCard from "./InstructorCard";

const InstructorPage = () => {
  const [users] = useUser();
  const  instructors = users.filter(user => user.role === 'instructor')
  
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-2 md:gap-4 mt-2  md:mt-4">
        {
           instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>) 
        }
    </div>
    
  );
};

export default InstructorPage;
