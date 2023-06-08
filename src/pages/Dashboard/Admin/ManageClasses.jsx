import React, { useState } from 'react';
import useAllClasses from '../../../hooks/usaAllClassess';

const ManageClasses = () => {
    const [classes] = useAllClasses();
    const [disabled,setDisabled] = useState(false);
    console.log(classes)
    const handleApproved = (event)=>{
        console.log(event.target)
        // setDisabled(true)
    }
    return (
        <div>
      <div className="overflow-x-auto">
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Seat</th>
              <th>enrolledStudent</th>
              <th>instructorName</th>
              <th>instructorEmail</th>
              <th>Status</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls) => (<tr key={cls.id}>                
                <td>{cls?.name}</td>
                <td><img src={cls.image} alt="" className="w-10" /></td>
                <td>{cls?.price}</td>                
                <td>{cls?.seat}</td>                
                <td>{cls?.enrolledStudent}</td>
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>{cls?.status}</td>
                <th>
                    {
                        cls.status === 'pending' ?   <button className="btn btn-ghost btn-xs" >Approved</button> :   <button disabled className="btn btn-ghost btn-xs" >Approved</button>
                    }
                
                  <button className="btn btn-ghost btn-xs" >Deny</button> <br />
                  <button className="btn btn-ghost btn-xs">FeedBack</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default ManageClasses;