import React, { useState } from 'react';
import useAllClasses from '../../hooks/useAllClasses';
import ClassCard from './ClassCard';
import useRole from '../../hooks/useRole';

const ClassPage = () => {
    const [allClasses] = useAllClasses();
    const approvedClasses = allClasses.filter(cls => cls.status === "approved")
    const [role] = useRole();   

    return (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-2 md:gap-4 mt-2  md:mt-4">
            {
                approvedClasses.map(approvedClass => <ClassCard key={approvedClass._id} approvedClass={approvedClass} role={role}></ClassCard>)
            }            
        </div>
    );
};

export default ClassPage;