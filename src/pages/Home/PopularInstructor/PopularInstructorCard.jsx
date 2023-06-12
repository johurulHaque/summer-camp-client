import React from "react";

const PopularInstructorCard = ({ instructor }) => {
  const { name, email, image, number, address } = instructor;
  return (
    <div className="card w-96 bg-base-100 shadow-xl">
      <figure>
        <img
          src={image ? image : `https://i.ibb.co/Jd4SLjf/images-1.jpg`}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title"><span className="text-accent font-semibold">Name: </span> {name}</h2>
        {
            email && <p><span className="text-accent font-semibold"> Email:</span> {email}</p>
        }   
        {
            number && <p><span className="text-accent font-semibold"> Number:</span> {number}</p>
        }
        {
            address && <p><span className="text-accent font-semibold"> Address:</span> {address}</p>
        }        
      </div>
    </div>
  );
};

export default PopularInstructorCard;
