import React from "react";
import { Link } from "react-router-dom";

const VisaCard = ({visa}) => {
    // console.log(visa)
    const {image, name, visaT, _id, email, description} = visa
  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img
          src={image}
          alt="Country Image"
        />
      </figure>
      <div className="card-body">
        <div className="flex justify-between">
            <h2 className="card-title">Country: {name}</h2>
            <h2 className="card-title">Visa Type: {visaT}</h2>
        </div>
        <p>
          {description}
        </p>
        <div className="card-actions justify-center">
          <Link to={`/visa/${_id}`}><button className="btn btn-primary">Details</button></Link>
        </div>
      </div>
    </div>
  );
};

export default VisaCard;
