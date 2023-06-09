import React, { useState } from "react";
import useUser from "../../hooks/useUser";
import InstructorCard from "./InstructorCard";

const InstructorPage = () => {
  const [users] = useUser();

//   const [instructor, setInstructor] = useState([]);
  const  instructors = users.filter(user => user.role === 'instructor')
  console.log(instructors)

//   console.log(users);
  return (
    <div className="grid grid-cols-2 gap-4  mt-4">
        {
           instructors.map(instructor => <InstructorCard key={instructor.id} instructor={instructor}></InstructorCard>) 
        }
    </div>
    
  );
};

export default InstructorPage;
