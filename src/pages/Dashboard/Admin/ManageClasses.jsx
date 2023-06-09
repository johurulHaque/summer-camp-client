import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';
import useAllClasses from '../../../hooks/useAllClasses';

const ManageClasses = () => {
    const [allClasses,refetch] = useAllClasses();
    // const [disabled,setDisabled] = useState(false);
    console.log(allClasses)

 
      

    const handleStatus = (cls,status) =>{
        console.log(cls)
        fetch(`http://localhost:5000/class/?id=${cls._id}&status=${status}`, {
            method: 'PATCH'
        })
        .then(res => res.json())
        .then(data => {
            console.log(data)
            if(data.modifiedCount){
                refetch();
                Swal.fire({
                    position: 'top-end',
                    icon: 'success',
                    title: `Status is changed to ${status}!`,
                    showConfirmButton: false,
                    timer: 1500
                  })
            }
        })
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
            {allClasses.map((cls) => (<tr key={cls.id}>                
                <td>{cls?.name}</td>
                <td><img src={cls.image} alt="" className="w-10" /></td>
                <td>{cls?.price}</td>                
                <td>{cls?.seats}</td>                
                <td>{cls?.enrolledStudent}</td>
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>{cls?.status}</td>
                <th>
                    {
                        cls.status === 'pending' ?   <button className="btn btn-ghost btn-xs" onClick={()=> handleStatus(cls,"approved")}  >Approved</button> :   <button disabled className="btn btn-ghost btn-xs" >Approved</button>
                    }
                    {
                        cls.status === 'pending' ?   <button className="btn btn-ghost btn-xs" onClick={()=> handleStatus(cls,"deny")}>Deny</button> :   <button disabled className="btn btn-ghost btn-xs" >Deny</button>
                    }
                
                    <Link to={`/dashboard/feedback/${cls._id}`}>
                  <button className="btn btn-ghost btn-xs">FeedBack</button></Link>
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