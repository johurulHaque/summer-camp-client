import React, { useState } from "react";
import Swal from "sweetalert2";
import { Link } from "react-router-dom";
import useAllClassesAdmin from "../../../hooks/useAllClassesAdmin";

const ManageClasses = () => {  
  const [adminClasses, refetch] = useAllClassesAdmin();
  console.log(adminClasses);

  const handleStatus = (cls, status) => {    
    fetch(`https://sports-academy-server-delta.vercel.app/class/?id=${cls._id}&status=${status}`, {
      method: "PATCH",
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.modifiedCount) {
          refetch();
          Swal.fire({
            position: "center",
            icon: "success",
            title: `Class status is changed to ${status}!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

  return (
    <div>
      <div className="overflow-x-auto">
      <h2 className="text-center">Admin/Manage Classes</h2>
        <table className="table">
          {/* head */}
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Seat</th>
              <th>Student</th>
              <th>Instructor</th>
              <th>instructorEmail</th>
              <th>Status</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {adminClasses.map((cls) => (
              <tr key={cls.id}>
                <td>
                  <img src={cls.image} alt="class image" className="w-20 h-24"  />
                </td>
                <td>{cls?.name}</td>                
                <td>{cls?.price}</td>
                <td>{cls?.seats}</td>
                <td>{cls?.enrolledStudent}</td>
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>
                {cls?.status == "approved" ? 
                    <div className="badge badge-accent badge-outline">
                      Approved
                    </div>
                   : 
                    ""
                  }
                  {cls?.status == "pending" ? 
                    <div className="badge badge-primary badge-outline">
                      Pending
                    </div>
                   : 
                    ""
                  }
                  {cls?.status == "deny" ? 
                    <div className="badge badge-secondary badge-outline">
                      Deny
                    </div>
                   : 
                   ""
                  }
                </td>
                <th>
                  {cls.status === "pending" ? (
                    <button
                    className="btn btn-xs btn-accent"
                      onClick={() => handleStatus(cls, "approved")}
                    >
                      Approved
                    </button>
                  ) : (
                    <button disabled  className="btn btn-xs ">
                      Approved
                    </button>
                  )}
                  {cls.status === "pending" ? (
                    <button
                      className="btn btn-xs btn-primary"
                      onClick={() => handleStatus(cls, "deny")}
                    >
                      Deny
                    </button>
                  ) : (
                    <button disabled  className="btn btn-xs ">
                      Deny
                    </button>
                  )}

                  <Link to={`/dashboard/feedback/${cls._id}`}>
                    <button  className="btn btn-xs btn-warning ">FeedBack</button>
                  </Link>
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
