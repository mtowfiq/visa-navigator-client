import { Link, useLoaderData } from "react-router-dom";
import { AuthContext } from "../Providers/AuthProvider";
import { useContext } from "react";
import Swal from "sweetalert2";

const VisaDetails = () => {
  const visa = useLoaderData();
  const { user } = useContext(AuthContext);
  //   console.log(user)
  //   console.log("The single visa: ", visa);
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
  } = visa;

  const handleApplicationSubmit = (e) => {
    e.preventDefault();

    const addedVisaId = _id;
    const applicantEmail = e.target.email.value;
    const firstName = e.target.firstName.value;
    const lastName = e.target.lastName.value;
    const appliedDate = e.target.appliedDate.value;
    const visaFee = e.target.visaFee.value;

    console.log(
      applicantEmail,
      firstName,
      lastName,
      appliedDate,
      visaFee,
      addedVisaId
    );

    const applicantInfo = {
      addedVisaId,
      applicantEmail,
      firstName,
      lastName,
      appliedDate,
      visaFee,
    };

    fetch("http://localhost:5000/visa/apply", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(applicantInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          document.getElementById("my_modal_1").close();
          Swal.fire({
            title: "Success",
            text: "You have successfully applied for the visa",
            icon: "success",
          });
        }
        if (data.message) {
          document.getElementById("my_modal_1").close();
          Swal.fire({
            icon: "error",
            title: "Oops...",
            text: "Application already submitted for this visa",
          });
        }
      })
      .catch((err) => console.log(err.message));
  };
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
            {/* Open the modal using document.getElementById('ID').showModal() method */}
            <button
              className="btn btn-primary"
              onClick={() => document.getElementById("my_modal_1").showModal()}
            >
              Apply for visa
            </button>

            <dialog id="my_modal_1" className="modal">
              <div className="modal-box">
                <h3 className="font-bold text-lg text-center mb-3">
                  Visa Application Form
                </h3>
                <form
                  className="grid md:grid-cols-2 gap-4 fieldset"
                  onSubmit={handleApplicationSubmit}
                >
                  {/* Email */}
                  <div>
                    <label className="label">Email</label>
                    <input
                      type="text"
                      defaultValue={user?.email}
                      name="email"
                      className="input"
                      placeholder="Email"
                      readOnly
                    />
                  </div>
                  {/* First Name */}
                  <div>
                    <label className="label">First Name</label>
                    <input
                      type="text"
                      name="firstName"
                      className="input"
                      placeholder="First Name"
                    />
                  </div>
                  {/* Last Name */}
                  <div>
                    <label className="label">Last Name</label>
                    <input
                      type="text"
                      name="lastName"
                      className="input"
                      placeholder="Last Name"
                    />
                  </div>
                  {/* Applied date */}
                  <div>
                    <label className="label">Applied Date</label>
                    <input
                      type="date"
                      name="appliedDate"
                      className="input"
                      placeholder="Applied Date"
                    />
                  </div>
                  {/* Visa fee */}
                  <div>
                    <label className="label">Visa Fee</label>
                    <input
                      type="text"
                      defaultValue={fee}
                      readOnly
                      name="visaFee"
                      className="input"
                      placeholder="Visa Fee"
                    />
                  </div>
                  {/* Apply for visa button */}
                  <div className="col-span-full mt-2 flex justify-center">
                    <button className="btn btn-neutral mt-4">
                      Apply for visa
                    </button>
                  </div>
                </form>

                <div className="modal-action">
                  <form method="dialog">
                    {/* if there is a button in form, it will close the modal */}
                    <button className="btn">Close</button>
                  </form>
                </div>
              </div>
            </dialog>
          </div>
        </div>
      </div>
    </div>
  );
};

export default VisaDetails;
