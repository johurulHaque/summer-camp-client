import React from 'react';
import useClasses from '../../../hooks/useClasses';

const MyClass = () => {
    const [classes] = useClasses();
    console.log("[classes]",classes)
    return (
        <div>
            
        </div>
    );
};

export default MyClass;