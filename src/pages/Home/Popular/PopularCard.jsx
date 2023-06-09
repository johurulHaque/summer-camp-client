import React from "react";

const PopularCard = ({ sport }) => {
  console.log(sport);
  const { seats, image, instructorName, name, price, students } = sport;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img src="https://swiperjs.com/demos/images/nature-3.jpg" alt="class image" />
      </figure>
      <div className="card-body">
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
      </div>
    </div>
  );
};

export default PopularCard;
