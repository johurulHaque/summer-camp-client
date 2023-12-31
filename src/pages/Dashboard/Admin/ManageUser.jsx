import React from "react";
import { Link } from "react-router-dom";
import Swal from "sweetalert2";
import useUserAdmin from "../../../hooks/useUserAdmin";

const ManageUser = () => {
  const [usersAdmin, refetch] = useUserAdmin();

  const handleMakeAdmin = (user) => {
    fetch(`https://sports-academy-server-delta.vercel.app/users/admin/${user._id}`, {
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
            title: `Role is changed to admin!`,
            showConfirmButton: false,
            timer: 1500,
          });
        }
      });
  };

const handleMakeInstructor = (user) =>{
    fetch(`https://sports-academy-server-delta.vercel.app/users/instructor/${user._id}`, {
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
              title: `Role is changed to instructor!`,
              showConfirmButton: false,
              timer: 1500,
            });
          }
        });
}

  return (
    <div>
      <div className="overflow-x-auto">
        <h2 className="text-center text-2xl">Admin/Manage Users</h2>
        <table className="table">
          {/* head */}
          <thead className="bg-black text-white">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Role</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {usersAdmin.map((user) => (
              <tr key={user.id}>
                <td>{user?.name}</td>
                <td>{user?.email}</td>
                <td>{user?.role}</td>
                <th>
                  {user.role === "admin" ? (
                    <button disabled className="btn btn-ghost btn-xs">
                      Make Admin
                    </button>
                  ) : (
                    <button
                      className="btn btn-secondary btn-xs"
                      onClick={() => handleMakeAdmin(user)}
                    >
                      Make Admin
                    </button>
                  )}
                  {user.role === "instructor" ? (
                    <button disabled className="btn btn-ghost btn-xs">
                      Instructor
                    </button>
                  ) : (
                    <button
                      onClick={() => handleMakeInstructor(user)}
                      className="btn btn-primary btn-xs"
                    >
                      Instructor
                    </button>
                  )}
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ManageUser;
