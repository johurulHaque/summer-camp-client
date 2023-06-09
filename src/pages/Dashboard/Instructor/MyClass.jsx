import React from "react";
import useClasses from "../../../hooks/useClasses";

const MyClass = () => {
  const [classes] = useClasses();
  console.log("[classes]", classes);
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
                <td>{cls?.seats}</td>                
                <td>{cls?.enrolledStudent}</td>
                <td>{cls?.instructorName}</td>
                <td>{cls?.instructorEmail}</td>
                <td>{cls?.status}</td>
                <th>
                  <button className="btn btn-ghost btn-xs">details</button>
                </th>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
