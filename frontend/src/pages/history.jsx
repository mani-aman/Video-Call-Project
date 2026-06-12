import React, { useContext, useEffect, useState } from 'react'
import { AuthContext } from '../contexts/AuthContext'
import { useNavigate } from 'react-router-dom';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';
import HomeIcon from '@mui/icons-material/Home';

import { IconButton } from '@mui/material';
export default function History() {


    const { getHistoryOfUser } = useContext(AuthContext);

    const [meetings, setMeetings] = useState([])


    const routeTo = useNavigate();

    useEffect(() => {
        const fetchHistory = async () => {
            try {
                const history = await getHistoryOfUser();
                setMeetings(history);
            } catch {
                // IMPLEMENT SNACKBAR
            }
        }

        fetchHistory();
    }, [])

    let formatDate = (dateString) => {

        const date = new Date(dateString);
        const day = date.getDate().toString().padStart(2, "0");
        const month = (date.getMonth() + 1).toString().padStart(2, "0")
        const year = date.getFullYear();

        return `${day}/${month}/${year}`

    }

    // return (
    //     <div>

    //         <IconButton onClick={() => {
    //             routeTo("/home")
    //         }}>
    //             <HomeIcon />
    //         </IconButton >
    //         {
    //             (meetings.length !== 0) ? meetings.map((e, i) => {
    //                 return (

    //                     <>


    //                         <Card key={i} variant="outlined">


    //                             <CardContent>
    //                                 <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
    //                                     Code: {e.meetingCode}
    //                                 </Typography>

    //                                 <Typography sx={{ mb: 1.5 }} color="text.secondary">
    //                                     Date: {formatDate(e.date)}
    //                                 </Typography>

    //                             </CardContent>


    //                         </Card>


    //                     </>
    //                 )
    //             }) : <></>

    //         }

    //     </div>
    // )


    return (
  <div
    style={{
      minHeight: "100vh",
      background:
        "linear-gradient(135deg, #0f172a 0%, #1e293b 50%, #334155 100%)",
      padding: "30px",
      color: "white",
    }}
  >
    {/* Header */}
    <div
      style={{
        display: "flex",
        justifyContent: "space-between",
        alignItems: "center",
        marginBottom: "40px",
      }}
    >
      <div>
        <h1
          style={{
            margin: 0,
            fontSize: "36px",
            fontWeight: "700",
          }}
        >
          Meeting History
        </h1>

        <p
          style={{
            color: "#cbd5e1",
            marginTop: "10px",
          }}
        >
          View all your previously joined meetings
        </p>
      </div>

      <IconButton
        onClick={() => {
          routeTo("/home");
        }}
        sx={{
          background: "#2563eb",
          color: "white",
          width: "55px",
          height: "55px",
          "&:hover": {
            background: "#1d4ed8",
          },
        }}
      >
        <HomeIcon />
      </IconButton>
    </div>

    {/* No History */}
    {meetings.length === 0 ? (
      <div
        style={{
          height: "60vh",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          flexDirection: "column",
          color: "#cbd5e1",
        }}
      >
        <h2>No Meeting History Found</h2>
        <p>You haven't joined any meetings yet.</p>
      </div>
    ) : (
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
          gap: "25px",
        }}
      >
        {meetings.map((e, i) => (
          <Card
            key={i}
            sx={{
              background: "rgba(255,255,255,0.08)",
              backdropFilter: "blur(12px)",
              border: "1px solid rgba(255,255,255,0.1)",
              borderRadius: "20px",
              color: "white",
              transition: "0.3s",
              "&:hover": {
                transform: "translateY(-5px)",
                boxShadow: "0 15px 35px rgba(0,0,0,0.3)",
              },
            }}
          >
            <CardContent>
              <div
                style={{
                  width: "55px",
                  height: "55px",
                  borderRadius: "15px",
                  background:
                    "linear-gradient(135deg,#3b82f6,#2563eb)",
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginBottom: "20px",
                  fontSize: "24px",
                  fontWeight: "bold",
                }}
              >
                🎥
              </div>

              <Typography
                variant="h6"
                sx={{
                  color: "white",
                  fontWeight: 600,
                  marginBottom: "12px",
                }}
              >
                Meeting Code
              </Typography>

              <Typography
                sx={{
                  color: "#60a5fa",
                  fontWeight: "bold",
                  fontSize: "18px",
                  marginBottom: "15px",
                }}
              >
                {e.meetingCode}
              </Typography>

              <Typography
                sx={{
                  color: "#cbd5e1",
                  fontSize: "14px",
                }}
              >
                Date: {formatDate(e.date)}
              </Typography>
            </CardContent>
          </Card>
        ))}
      </div>
    )}
  </div>
);
}