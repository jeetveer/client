import React from 'react'
import img1 from "../../assets/img1.jpg"

function Profile() {
  return (
    <><div className=" d-flex justify-content-center">
      <div className="card">
        <img src={img1} alt="" style={{width:"80px",height:"80px"}} />
        <h3><i class="fa-solid fa-user"></i>Jeet Veer</h3>
        <h2>jeetveer67@gmail.com</h2>
        <h2>8602478719</h2>
        <h2>male</h2>
        <h2>Bhopal</h2>
        <h2>Active</h2>
        <h2>Date created :- Bhopal</h2>
        <h2>Date updated :- Bhopal</h2>
      </div>
    </div>

    </>
  )
}

export default Profile