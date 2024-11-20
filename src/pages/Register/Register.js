import React, { useState } from 'react'
import img1 from "../../assets/img1.jpg"
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function Register() {

  const [inputData, setInputData] = useState({
    fname: "",
    lname: "",
    email: "",
    mobile: "",
    gender: "",
    location: ""
  })
  const [status, setStatus] = useState("Active")
  const [imgProfile, setImgProfile] = useState()

  function handleChange(e) {
    const { name, value } = e.target;
    setInputData({ ...inputData, [name]: value });
    console.log(inputData)
  }

  function handleStatus(e) {
    setStatus(e.target.value);
    console.log(status)
  }

  function handleUserProfile(e) {
    const imgFile = e.target.files[0];
    if (imgFile) {
      const imgUrl = URL.createObjectURL(imgFile);
      setImgProfile(imgUrl)
    }
  }

  function handleSubmit(e) {
    e.preventDefault();
    // Validation
    const { fname, lname, email, mobile, gender, location } = inputData;

    if (!fname) {
      toast.error("first name is required");
    } else if (!lname) {
      toast.error("Last name is required")
    } else if (!email.includes("@")) {
      toast.error("Enter valid email")
    } else if (!mobile) {
      toast.error("mobile number is required")
    } else if (!(mobile.length === 10)) {
      toast.error("Enter 10 digit mobile number")
    } else if (!gender) {
      toast.error("gender is required")
    } else if (!location) {
      toast.error("Loction is required")
    } else if (!imgProfile) {
      toast.error("Select profile picture")
    }else{
      toast("Registration Successful")
    }
  }



  return (
    <>
      <div className="">

        <div className="d-flex align-items-center justify-content-center">
          <h2>Register your details</h2>
        </div>

        <form className='container' onSubmit={handleSubmit}>

          <div className="card d-flex justify-content-center p-4 ">
            <div className="row">
              <div className="profile">
                <img src={imgProfile ? imgProfile : img1} alt="profilePic" style={{ width: "80px", height: "80px" }} />
              </div>
              <div className="d-flex flex-column col-sm-6">
                <label htmlFor="fname">First Name</label>
                <input className='border rounded' type="text" name='fname' id='fname' onChange={handleChange} />
              </div>
              <div className="d-flex flex-column col-sm-6">
                <label htmlFor="lname">Last Name</label>
                <input className='border rounded' type="text" name='lname' id='lname' onChange={handleChange} />
              </div>
              <div className="d-flex flex-column col-sm-6">
                <label htmlFor="email">Email</label>
                <input className='border rounded' type="email" name='email' id='email' onChange={handleChange} />
              </div>
              <div className="d-flex flex-column col-6">
                <label htmlFor="mobile">Mobile</label>
                <input className='border rounded' type="number" name='mobile' id='mobile' onChange={handleChange} />
              </div>
              <div className="d-flex flex-column col-6">
                <label>Select Your Gender</label>
                <div className="">
                  <input className='border rounded' type="radio" name='gender' value="male" id='male' onChange={handleChange} />
                  <label htmlFor="male">Male</label>
                </div>
                <div className="">
                  <input className='border rounded' type="radio" name='gender' value="female" id='female' onChange={handleChange} />
                  <label htmlFor="female">Female</label>
                </div>
              </div>
              <div className="col-6">
                <label htmlFor="location">Enter your location</label>
                <input type="text" name='location' id='location' onChange={handleChange} />
              </div>
              {/*status*/}
              <div className="col-6" >
                <label htmlFor="">Select your status</label>
                <select name="status" id="status" onChange={handleStatus}>
                  <option value="active">Active</option>
                  <option value="deactive">Deactive</option>
                </select>
              </div>
              {/* imgae  */}
              <div className="col-6">
                <label htmlFor="profilepic">Select your profile picture</label>
                <input type="file" accept='image/*' name='profilepic' onChange={handleUserProfile} />
              </div>
              <button className='' type="submit">Submit</button>
            </div>
          </div>
        </form>
      </div>

      <ToastContainer />
    </>
  )
}

export default Register