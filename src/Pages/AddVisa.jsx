import React, { useContext, useState } from "react";
import { AuthContext } from "../Providers/AuthProvider";
import Swal from "sweetalert2";

const AddVisa = () => {
  const { user } = useContext(AuthContext);
  const [visaType, setVisaType] = useState("");
  const [error, setError] = useState("");
  const [documents, setDocuments] = useState([]);

  const handleCheckBoxChange = (e) => {
    const { value, checked } = e.target;
    if (checked) {
      setDocuments([...documents, value]);
    } else {
      setDocuments(documents.filter((doc) => doc != value));
    }
  };

  const handleAddVisa = (e) => {
    e.preventDefault();
    setError("");

    const image = e.target.image.value;
    const name = e.target.name.value;
    if (visaType === "") {
      setError("Please select a visa type option");
      return;
    }
    const visaT = visaType;
    const processingTime = e.target.processingTime.value;
    const requiredDocuments = documents;
    const description = e.target.description.value;
    const age = e.target.age.value;
    const fee = e.target.fee.value;
    const validity = e.target.validity.value;
    const appMethod = e.target.appMethod.value;
    const email = user?.email;
    console.log(
      image,
      name,
      visaT,
      processingTime,
      requiredDocuments,
      description,
      age,
      fee,
      validity,
      appMethod,
      email
    );

    const visaInfo = {
      image,
      name,
      visaT,
      processingTime,
      requiredDocuments,
      description,
      age,
      fee,
      validity,
      appMethod,
      email,
    };

    fetch("http://localhost:5000/visas", {
      method: "POST",
      headers: {
        "content-type": "application/json",
      },
      body: JSON.stringify(visaInfo),
    })
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        if (data.insertedId) {
          Swal.fire({
            title: "Success",
            text: "Your visa has been added",
            icon: "success",
          });
        }
        e.target.reset()
      })
      .catch((err) => console.log(err.message));
  };

  return (
    <div className="hero bg-base-200 min-h-screen">
      <div className="hero-content flex-col lg:flex-row-reverse">
        <div className="text-center lg:text-left">
          <h1 className="text-5xl font-bold">Add a New Visa</h1>
          <p className="py-6">
            Use this form to securely add and manage your visa applications.
            Whether you're planning a trip, applying for work or study, or
            tracking an existing visa — this section helps you keep everything
            organized in one place.
          </p>
        </div>
        <div className="card bg-base-100 w-full max-w-sm shrink-0 shadow-2xl">
          <div className="card-body">
            <form onSubmit={handleAddVisa}>
              <fieldset className="grid md:grid-cols-2 gap-4 fieldset">
                <div>
                  <label className="label">Country Image</label>
                  <input
                    type="text"
                    name="image"
                    className="input"
                    placeholder="Country Image"
                  />
                </div>
                <div>
                  <label className="label">Country Name</label>
                  <input
                    type="text"
                    name="name"
                    className="input"
                    placeholder="Country Name"
                  />
                </div>
                <div>
                  <label className="label">Visa Type</label>
                  <div className="input">
                    <select onChange={(e) => setVisaType(e.target.value)}>
                      <option value="">Choose an option</option>
                      <option value="Tourist Visa">Tourist Visa</option>
                      <option value="Student Visa">Student Visa</option>
                      <option value="Official Visa">Official Visa</option>
                    </select>
                  </div>
                </div>
                <div>
                  <label className="label">Processing Time</label>
                  <input
                    type="text"
                    name="processingTime"
                    className="input"
                    placeholder="Processing Time"
                  />
                </div>
                <div>
                  <label className="label">Required Documents</label>
                  <div>
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Valid Passport"
                        onChange={handleCheckBoxChange}
                      />{" "}
                      Valid Passport
                    </label>
                    <br />
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Visa Application Form"
                        onChange={handleCheckBoxChange}
                      />{" "}
                      Visa Application Form
                    </label>

                    <br />
                    <label className="flex items-center gap-2">
                      <input
                        type="checkbox"
                        value="Passport-Sized Photo"
                        onChange={handleCheckBoxChange}
                      />{" "}
                      Passport-Sized Photo
                    </label>
                  </div>
                </div>
                <div>
                  <label className="label">Description</label>
                  <input
                    type="text"
                    name="description"
                    className="input"
                    placeholder="Description"
                  />
                </div>
                <div>
                  <label className="label">Age Restriction</label>
                  <input
                    type="number"
                    name="age"
                    className="input"
                    placeholder="Age Restriction"
                  />
                </div>
                <div>
                  <label className="label">Fee</label>
                  <input
                    type="number"
                    name="fee"
                    className="input"
                    placeholder="Fee"
                  />
                </div>
                <div>
                  <label className="label">Validity</label>
                  <input
                    type="text"
                    name="validity"
                    className="input"
                    placeholder="Validity"
                  />
                </div>
                <div>
                  <label className="label">Application method</label>
                  <input
                    type="text"
                    name="appMethod"
                    className="input"
                    placeholder="Application method"
                  />
                </div>
              </fieldset>
              <div>
                {error && (
                  <p className="text-center text-red-600 text-xl my-2">
                    {error}
                  </p>
                )}
              </div>
              <button className="btn btn-neutral mt-4">Add Visa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisa;
