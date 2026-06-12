// import React from 'react'
// import "../App.css"
// import { Link, useNavigate } from 'react-router-dom'
// export default function LandingPage() {


//     const router = useNavigate();

//     return (
//         <div className='landingPageContainer'>
//             <nav>
//                 <div className='navHeader'>
//                     <h2>Majitha Video Call</h2>
//                 </div>
//                 <div className='navlist'>
//                     <p onClick={() => {
//                         router("/aljk23")
//                     }}>Join as Guest</p>
//                     <p onClick={() => {
//                         router("/auth")

//                     }}>Register</p>
//                     <div onClick={() => {
//                         router("/auth")

//                     }} role='button'>
//                         <p>Login</p>
//                     </div>
//                 </div>
//             </nav>


//             <div className="landingMainContainer">
//                 <div>
//                     <h1><span style={{ color: "#FF9839" }}>Connect</span> with your loved Ones</h1>

//                     <p>Cover a distance by Apna Video Call</p>
//                     <div role='button'>
//                         <Link to={"/auth"}>Get Started</Link>
//                     </div>
//                 </div>
//                 <div>

//                     {/* <img src="/mobile.png" alt="" /> */}

//                 </div>
//             </div>



//         </div>
//     )
// }








import React from "react";
import "../App.css";
import { Link, useNavigate } from "react-router-dom";

export default function LandingPage() {
  const navigate = useNavigate();

  return (
    <div className="landing-page">
      <nav className="navbar">
        <div className="logo">
          <h2>Majitha Meet</h2>
        </div>

        <div className="nav-links">
          <button
            className="nav-btn ghost"
            onClick={() => navigate("/aljk23")}
          >
            Join as Guest
          </button>

          <button
            className="nav-btn ghost"
            onClick={() => navigate("/auth")}
          >
            Register
          </button>

          <button
            className="nav-btn primary"
            onClick={() => navigate("/auth")}
          >
            Login
          </button>
        </div>
      </nav>

      <section className="hero-section">
        <div className="hero-left">
          <span className="badge">🚀 Professional Video Meetings</span>

          <h1>
            Connect, Collaborate &
            <span> Meet Anywhere</span>
          </h1>

          <p>
            Secure HD video calls, instant meetings, screen sharing and
            real-time collaboration for teams, friends and family.
          </p>

          <div className="hero-buttons">
            <Link to="/auth" className="btn-primary">
              Get Started
            </Link>

            <button
              className="btn-secondary"
              onClick={() => navigate("/aljk23")}
            >
              Join Meeting
            </button>
          </div>

          <div className="stats">
            <div>
              <h3>10K+</h3>
              <p>Users</p>
            </div>

            <div>
              <h3>50K+</h3>
              <p>Meetings</p>
            </div>

            <div>
              <h3>99.9%</h3>
              <p>Uptime</p>
            </div>
          </div>
        </div>

        <div className="hero-right">
          <div className="video-card">
            <div className="video-screen">
              <h2>📹 Live Meeting</h2>
              <p>HD Video • Screen Share • Chat</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}

