import React, { useState } from 'react';
import useAllClasses from '../../hooks/useAllClasses';
import ClassCard from './ClassCard';
import useAuth from '../../hooks/useAuth';
import useUser from '../../hooks/useUser';
const ClassPage = () => {
    const [allClasses] = useAllClasses();
    const approvedClasses = allClasses.filter(cls => cls.status === "approved")
    console.log(approvedClasses)
   
    const {user} = useAuth();
    const [users] = useUser();
    const currentUser = users.find(singleUser => singleUser.email === user.email )
    console.log("user",currentUser);

    // if(currentUser.role ==)

    // const [disable,setDisable] = useState(false);
    
    // if(currentUser?.role == "instructor" || currentUser?.role == "admin"){
    //     // setDisable(true)
    // }
   

    return (
        <div className='grid grid-cols-3 gap-4'>
            {
                approvedClasses.map(approvedClass => <ClassCard key={approvedClass._id} approvedClass={approvedClass} role={currentUser?.role}></ClassCard>)
            }
            <h1>This is class page.</h1>
            
        </div>
    );
};

export default ClassPage;