import React from 'react';
import useEnrollClass from '../../../hooks/useEnrollClass';

const PaymentHistory = () => {
    const [enrolled] = useEnrollClass();

    return (
        <div className="w-full">
      {/* <Helmet>
            <title>Bistro Boss | My Cart</title>
          </Helmet> */}

      <div className="overflow-x-auto w-full">
        <table className="table w-full">
          {/* head */}
          <thead>
            <tr>
              <th>#</th>
              <th>Image</th>
              <th>Class Name</th>
              <th>Instructor Name</th>
              <th>Price</th>
              <th>Transaction Id</th>
            </tr>
          </thead>
          <tbody>
            {enrolled.map((cls, index) => (
              <tr key={cls._id}>
                <td>{index + 1}</td>              
                <td>
                    <img src={cls.image} alt="" />                    
                </td>
                <td>{cls.name}</td>
                <td>{cls.instructorName}</td>
                <td>${cls.price}</td>
                <td>{cls.transactionId}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
    );
};

export default PaymentHistory;