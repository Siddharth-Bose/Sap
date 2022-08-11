import React from "react";
import './PersonalDetails.css';

export default function PersonalDetails() {
    return (
        <div className="container">
            <div className="row">
                <h1 className="text-left">Personal Details</h1>
            </div>
            <div className="row">
                <div className="col-md-3 my-2">
                    <label for="First Name" className="form-label">First Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter First Name" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="Middle Name" className="form-label">Middle Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Middle Name" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="Last Name" className="form-label">Last Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Last Name" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Login ID<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Login ID" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-2">
                    <label for="formGroupExampleInput" className="form-label">Father's Full Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Father's Full Name" required />
                </div>
                <div className="col-md-6 my-2">
                    <label for="formGroupExampleInput" className="form-label">Spouse's Full Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Spouse's Full Name" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-6 my-2">
                    <label for="formGroupExampleInput" className="form-label">Mother's Full Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Mother's Full Name" required />
                </div>
                <div className="col-md-6 my-2">
                    <label for="formGroupExampleInput" className="form-label">Mother's Maiden Name<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Mother's Maiden Name" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Date of Birth<span className="text-danger">*</span></label>
                    <input className="form-control" type="date" placeholder="Enter Date of Birth" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Place of Birth<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Place of Birth" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Country of Birth<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Country of Birth" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Country of Birth Code</label>
                    <input disabled="true" className="form-control" type="text" placeholder="Country of Birth Code" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Gender<span className="text-danger">*</span></label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Gender</option>
                        <option value="Male">Male</option>
                        <option value="Female">Female</option>
                        <option value="3">Three</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Marital Status</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Martial Status</option>
                        <option value="Male">Married</option>
                        <option value="Female">Unmarried</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">No of Children<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter No of Children" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Anniversary<span className="text-danger">*</span></label>
                    <input className="form-control" type="date" placeholder="Enter Anniversary" required />
                </div>
            </div>
            <div className="row">
                <h1 className="text-left">Contact Details</h1>
            </div>
            <div className="row">
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Email<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Email" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Phone Number<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Select Phone Number" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Preferred Contact Mode<span className="text-danger">*</span></label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Contact Mode</option>
                        <option value="Male">Mobile</option>
                        <option value="Female">Email</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Alternate Number<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Alternate Number" required />
                </div>
            </div>
            <div className="row">
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Relationship with Email Holder<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Relation Here" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Relationship with Phone No Holder<span className="text-danger">*</span></label>
                    <input className="form-control" type="text" placeholder="Enter Relation Here" required />
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Transaction Access Flag</label>
                    <select class="form-select" aria-label="Default select example">
                        <option selected>Select Transaction Access Flag</option>
                        <option value="Male">Y</option>
                        <option value="Female">N</option>
                    </select>
                </div>
                <div className="col-md-3 my-2">
                    <label for="formGroupExampleInput" className="form-label">Mobile Access Flag</label>
                    <input className="form-control" type="text" placeholder="Y" required />
                </div>
            </div>
            <div className="d-flex flex-row-reverse">
                <a href="/" className="btn bg-custom2 m-4" style={{width:'150px'}}>Next</a>
                <a href="/" className="btn bg-custom m-4" style={{width:'150px'}}>Save</a>
            </div>
        </div>
    );
}
