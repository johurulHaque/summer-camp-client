import React from "react";

const PopularCard = ({ sport }) => {
  console.log(sport);
  const { seats, image, instructorName, name, price, enrolledStudent,status } = sport;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src={image} alt="class image" className="w-full h-72" />
      </figure>
      <div className="card-body">
        <h2 className="card-title">         
          {name}
          <div className="badge badge-secondary">$ {price}</div>
        </h2>
        <p> <span className="text-xl font-semibold">Instructor name:</span> {instructorName}</p>
        <div className="card-actions justify-end">
          <div className="badge  badge-primary badge-outline">
            Available {seats} seats
          </div>
          <div className="badge  badge-accent badge-outline">
            Total student {enrolledStudent}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PopularCard;
