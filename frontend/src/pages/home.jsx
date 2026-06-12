import React, { useContext, useState } from 'react'
import withAuth from '../utils/withAuth'
import { useNavigate } from 'react-router-dom'
import "../App.css";
import { Button, IconButton, TextField } from '@mui/material';
import RestoreIcon from '@mui/icons-material/Restore';
import { AuthContext } from '../contexts/AuthContext';

function HomeComponent() {


    let navigate = useNavigate();
    const [meetingCode, setMeetingCode] = useState("");


    const {addToUserHistory} = useContext(AuthContext);
    let handleJoinVideoCall = async () => {
        await addToUserHistory(meetingCode)
        navigate(`/${meetingCode}`)
    }

//     return (
//         <>

//             <div className="navBar">

//                 <div style={{ display: "flex", alignItems: "center" }}>

//                     <h2>Apna Video Call</h2>
//                 </div>

//                 <div style={{ display: "flex", alignItems: "center" }}>
//                     <IconButton onClick={
//                         () => {
//                             navigate("/history")
//                         }
//                     }>
//                         <RestoreIcon />
//                     </IconButton>
//                     <p>History</p>

//                     <Button onClick={() => {
//                         localStorage.removeItem("token")
//                         navigate("/auth")
//                     }}>
//                         Logout
//                     </Button>
//                 </div>


//             </div>


//             <div className="meetContainer">
//                 <div className="leftPanel">
//                     <div>
//                         <h2>Providing Quality Video Call Just Like Quality Education</h2>

//                         <div style={{ display: 'flex', gap: "10px" }}>

//                             <TextField onChange={e => setMeetingCode(e.target.value)} id="outlined-basic" label="Meeting Code" variant="outlined" />
//                             <Button onClick={handleJoinVideoCall} variant='contained'>Join</Button>

//                         </div>
//                     </div>
//                 </div>
//                 <div className='rightPanel'>
//                     {/* <img srcSet='/logo3.png' alt="" /> */}
//                 </div>
//             </div>
//         </>
//     )
// }



return (
  <>
    <div
      style={{
        minHeight: "100vh",
        background:
          "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
        color: "white",
      }}
    >
      {/* Navbar */}
      <div
        style={{
          height: "80px",
          padding: "0 40px",
          display: "flex",
          justifyContent: "space-between",
          alignItems: "center",
          borderBottom: "1px solid rgba(255,255,255,0.1)",
          backdropFilter: "blur(10px)",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontSize: "28px",
            fontWeight: "700",
            color: "#60a5fa",
          }}
        >
          Majitha Video Call
        </h2>

        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: "20px",
          }}
        >
          <Button
            startIcon={<RestoreIcon />}
            variant="outlined"
            onClick={() => navigate("/history")}
            sx={{
              borderColor: "#60a5fa",
              color: "#60a5fa",
              borderRadius: "12px",
            }}
          >
            History
          </Button>

          <Button
            variant="contained"
            onClick={() => {
              localStorage.removeItem("token");
              navigate("/auth");
            }}
            sx={{
              background: "#ef4444",
              borderRadius: "12px",
              px: 3,
            }}
          >
            Logout
          </Button>
        </div>
      </div>

      {/* Hero Section */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "80px",
          flexWrap: "wrap",
          gap: "50px",
        }}
      >
        {/* Left */}
        <div style={{ flex: 1, minWidth: "350px" }}>
          <h1
            style={{
              fontSize: "55px",
              marginBottom: "20px",
              lineHeight: "1.2",
            }}
          >
            Connect With Anyone,
            <br />
            <span style={{ color: "#60a5fa" }}>Anywhere Instantly</span>
          </h1>

          <p
            style={{
              fontSize: "18px",
              color: "#cbd5e1",
              marginBottom: "40px",
              maxWidth: "600px",
            }}
          >
            Create secure video meetings, collaborate with your team,
            and stay connected with friends and family from anywhere.
          </p>

          <div
            style={{
              background: "rgba(255,255,255,0.08)",
              padding: "25px",
              borderRadius: "20px",
              width: "100%",
              maxWidth: "550px",
              backdropFilter: "blur(10px)",
              border: "1px solid rgba(255,255,255,0.1)",
            }}
          >
            <h3 style={{ marginBottom: "20px" }}>
              Join or Create a Meeting
            </h3>

            <div
              style={{
                display: "flex",
                gap: "15px",
                flexWrap: "wrap",
              }}
            >
              <TextField
                fullWidth
                label="Enter Meeting Code"
                variant="outlined"
                onChange={(e) => setMeetingCode(e.target.value)}
                sx={{
                  flex: 1,
                  minWidth: "250px",
                  "& .MuiOutlinedInput-root": {
                    backgroundColor: "white",
                    borderRadius: "12px",
                  },
                }}
              />

              <Button
                variant="contained"
                onClick={handleJoinVideoCall}
                sx={{
                  minWidth: "140px",
                  borderRadius: "12px",
                  background:
                    "linear-gradient(135deg, #3b82f6 0%, #2563eb 100%)",
                  fontWeight: "bold",
                }}
              >
                Join Meeting
              </Button>
            </div>
          </div>
        </div>

        {/* Right */}
        <div
          style={{
            flex: 1,
            minWidth: "350px",
            display: "flex",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              width: "450px",
              height: "450px",
              borderRadius: "30px",
              background:
                "linear-gradient(135deg, rgba(96,165,250,0.25), rgba(59,130,246,0.05))",
              border: "1px solid rgba(255,255,255,0.1)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              backdropFilter: "blur(15px)",
            }}
          >
            <div style={{ textAlign: "center" }}>
              <h2 style={{ color: "#60a5fa" }}>
                Video Conferencing Platform
              </h2>

              <p style={{ color: "#cbd5e1" }}>
                HD Meetings • Secure Calls • Real-time Collaboration
              </p>

              {/* Optional image */}
              {/* <img src="/logo3.png" alt="Video Call" width="300" /> */}
            </div>
          </div>
        </div>
      </div>
    </div>
  </>
)
}

export default withAuth(HomeComponent)