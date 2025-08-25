import React from "react";
import { Link, useLoaderData } from "react-router-dom";

const VisaDetails = () => {
  const visa = useLoaderData();
  console.log("The single visa: ", visa);
  const {
    _id,
    image,
    name,
    visaT,
    age,
    appMethod,
    description,
    email,
    fee,
    processingTime,
    requiredDocuments,
    validity,
  } = visa;
  return (
    <div>
      <h2 className="text-2xl text-center m-2">Visa Details:</h2>
      <div className="card card-side bg-base-100 shadow-xl m-3">
        <figure>
          <img src={image} alt="Country Image" />
        </figure>
        <div className="card-body">
          <h2 className="card-title">{name}</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
            <p>Description: {description}</p>
            <p>Validity: {validity}</p>
            <p>Visa Type: {visaT}</p>
            <p>Processing Time: {processingTime}</p>
            <p>Required Documents: {requiredDocuments?.join(", ")}</p>
            <p>Application Method: {appMethod}</p>
            <p>Fee: ${fee}</p>
            <p>Age Restriction: {age}</p>
          </div>
          <div className="card-actions justify-start mt-3.5">
            <Link>
              <button className="btn btn-primary btn-lg">Apply</button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
