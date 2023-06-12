import React from "react";

const InstructorCard = ({instructor}) => {
    const {name,email,image,number,address} = instructor;
  return (
    <div className="card card-side bg-base-100 shadow-xl">
      <figure>
        <img
          src={image ? image : `https://i.ibb.co/Jd4SLjf/images-1.jpg`}
          alt="Movie"
        />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{name}</h2>
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

export default InstructorCard;
