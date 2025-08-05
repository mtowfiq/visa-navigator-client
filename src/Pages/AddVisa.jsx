import React from "react";

const AddVisa = () => {

    const handleAddVisa = e =>{
        e.preventDefault()
    }

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
                    <input type="text" className="input" placeholder="Country Image" />
                </div>
                <div>
                    <label className="label">Country Name</label>
                    <input type="text" className="input" placeholder="Country Name" />
                </div>
                <div>
                    <label className="label">Visa Type</label>
                    <input type="text" className="input" placeholder="Visa Type" />
                </div>
                <div>
                    <label className="label">Processing Time</label>
                    <input type="text" className="input" placeholder="Processing Time" />
                </div>
                <div>
                    <label className="label">Required Documents</label>
                    <input type="text" className="input" placeholder="Required Documents" />
                </div>
                <div>
                    <label className="label">Description</label>
                    <input type="text" className="input" placeholder="Description" />
                </div>
                <div>
                    <label className="label">Age Restriction</label>
                    <input type="text" className="input" placeholder="Age Restriction" />
                </div>
                <div>
                    <label className="label">Fee</label>
                    <input type="text" className="input" placeholder="Fee" />
                </div>
                <div>
                    <label className="label">Validity</label>
                    <input type="text" className="input" placeholder="Validity" />
                </div>
                <div>
                    <label className="label">Application method</label>
                    <input type="text" className="input" placeholder="Application method" />
                </div>
              </fieldset>
              <button className="btn btn-neutral mt-4">Add Visa</button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AddVisa;
