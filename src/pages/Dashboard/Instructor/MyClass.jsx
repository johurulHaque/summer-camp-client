import React from "react";
import useClasses from "../../../hooks/useClasses";

const MyClass = () => {
  const [classes] = useClasses();
  console.log("[classes]", classes);
  return (
    <div>
      <div className="overflow-x-auto">
      <h3 className="text-center text-3xl">Instructor/My classes</h3>
        <table className="table table-zebra">
          {/* head */}
          <thead className="bg-black text-white">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Image</th>
              <th>Price</th>
              <th>Seat</th>
              <th>enrolledStudent</th>
              <th>Status</th>
              <th>Feedback</th>
            </tr>
          </thead>
          <tbody>
            {classes.map((cls, idx) => (
              <tr key={cls.id}>
                <td>{idx + 1}</td>
                <td>{cls?.name}</td>
                <td>
                  <img src={cls.image} alt="" className="w-20 h-24" />
                </td>
                <td>{cls?.price}</td>
                <td>{cls?.seats}</td>
                <td>{cls?.enrolledStudent}</td>
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
                <td>
                  {
                  cls?.feedback ? cls.feedback : "no feedback"
                  }</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyClass;
