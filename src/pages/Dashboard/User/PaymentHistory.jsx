import React from "react";
import useEnrollClass from "../../../hooks/useEnrollClass";

const PaymentHistory = () => {
  const [enrolled] = useEnrollClass();

  return (
    <div className="w-full">
      {/* <Helmet>
            <title>Bistro Boss | My Cart</title>
          </Helmet> */}
      <div className="uppercase font-semibold h-[60px] flex justify-evenly items-center">
        <h3 className="text-3xl">My Payment History </h3>
      </div>

      <div className="overflow-x-auto w-full">
        <table className="table w-full table-zebra">
          {/* head */}
          <thead className="bg-black text-white">
            <tr>
              <th>#</th>
              <th>Class Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
              <th>Payment Date</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>
                <td>{cls.name}</td>
                <td>${cls.price}</td>
                <td>{cls.transactionId}</td>
                <td>{cls.date}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default PaymentHistory;
