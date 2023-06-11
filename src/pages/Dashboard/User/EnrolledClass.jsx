import React from "react";
import useEnrollClass from "../../../hooks/useEnrollClass";

const EnrolledClass = () => {
  const [enrolled] = useEnrollClass();

  return (
    <div className="w-full">
      {/* <Helmet>
            <title>Bistro Boss | My Cart</title>
          </Helmet> */}
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">My Enrolled Class </h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Instructor Name</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>
                  <img
                    src={cls.image}
                    alt="enroll class"
                    className="w-20 h-24"
                  />
                </td>
                <td>{cls.name}</td>
                <td>${cls.price}</td>
                <td>{cls.instructorName}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default EnrolledClass;
