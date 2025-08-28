import React from "react";

const MyAddedVisaCard = ({ addedVisa }) => {
  const {
    _id,
    image,
    name,
    visaT,
    age,
    appMethod,
    description,
    fee,
    processingTime,
    requiredDocuments,
    validity,
  } = addedVisa;

  return (
    <div className="card bg-base-100 w-96 shadow-sm">
      <figure>
        <img src={image} alt="Country Image" />
      </figure>
      <div className="card-body">
        <h2 className="card-title text-3xl">
          {name}
          <div className="badge badge-secondary">{visaT}</div>
        </h2>
        <div className="grid grid-cols-2 gap-3">
          <p>Description: {description}</p>
          <p>Application method: {appMethod}</p>
          <p>Validity: {validity}</p>
          <p>Processing Time: {processingTime}</p>
          <p>Fee: $ {fee}</p>
        </div>
        <div className="card-actions justify-end">
          <button className="badge badge-outline">Update</button>
          <button className="badge badge-outline">Delete</button>
        </div>
      </div>
    </div>
  );
};

export default MyAddedVisaCard;
