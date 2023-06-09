import React, { useState } from 'react';
import useUser from '../../hooks/useUser';
import useAuth from '../../hooks/useAuth';


const ClassCard = ({approvedClass,role}) => {    
    const { seats, image, instructorName, name, price, students } = approvedClass;
    const bgColor = seats - students;
    console.log(bgColor)
   

// console.log(role)
    return (
      <div className="card w-96 bg-base-100 shadow-xl">
        <figure>
          <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="class image" />
        </figure>
        <div className="card-body" style={{ background: (seats-students) ? '' : 'red' }}>
          <h2 className="card-title">
            {name}
            <div className="badge badge-secondary">{price}</div>
          </h2>
          <p>{instructorName || "jony"}</p>
          <div className="card-actions justify-end">
            <div className="badge  badge-primary badge-outline">
              Available {seats - students} seats
            </div>
            <div className="badge  badge-accent badge-outline">
              Total student {students}
            </div>
          </div>
          <div>
            {
                (role == ("instructor" || "admin") || (seats - students == 0))  ? <button className='btn btn-primary btn-outline' disabled  >Select</button> :  <button className='btn btn-primary btn-outline' >Select</button>
            }
           
          </div>
        </div>
      </div>
    );
};

export default ClassCard;