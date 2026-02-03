import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import { Snackbar } from "@mui/material";
import { AuthContext } from "../contexts/AuthContext";

/* ---------- THEME ---------- */
const defaultTheme = createTheme({
  palette: {
    primary: {
      main: "#D97500",
    },
    secondary: {
      main: "#FF9839",
    },
  },
});

/* ---------- COMPONENT ---------- */
export default function Authentication() {
  const [username, setUsername] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [name, setName] = React.useState("");
  const [error, setError] = React.useState("");
  const [message, setMessage] = React.useState("");
  const [formState, setFormState] = React.useState(0); // 0 = login, 1 = register
  const [open, setOpen] = React.useState(false);

  const { handleRegister, handleLogin } = React.useContext(AuthContext);

  const handleAuth = async () => {
    try {
      if (formState === 0) {
        await handleLogin(username, password);
      } else {
        const result = await handleRegister(name, username, password);
        setMessage(result);
        setOpen(true);
        setError("");
        setFormState(0);
        setUsername("");
        setPassword("");
        setName("");
      }
    } catch (err) {
      setError(err?.response?.data?.message || "Something went wrong");
    }
  };

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />

        {/* LEFT IMAGE */}
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: 'url("/background.png")',
            backgroundRepeat: "no-repeat",
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />

        {/* RIGHT AUTH CARD */}
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 6,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              background: "rgba(255,255,255,0.95)",
              borderRadius: "20px",
              padding: "2rem",
              boxShadow: "0 10px 30px rgba(0,0,0,0.2)",
            }}
          >
            <Avatar
              sx={{
                m: 1,
                bgcolor: "primary.main",
                boxShadow: "0 0 15px rgba(217,117,0,0.6)",
              }}
            >
              <LockOutlinedIcon />
            </Avatar>

            {/* SWITCH BUTTONS */}
            <Box sx={{ display: "flex", gap: "1rem", mb: 2 }}>
              <Button
                variant={formState === 0 ? "contained" : "outlined"}
                color="primary"
                sx={{ borderRadius: "20px", px: 3 }}
                onClick={() => setFormState(0)}
              >
                Sign In
              </Button>

              <Button
                variant={formState === 1 ? "contained" : "outlined"}
                color="primary"
                sx={{ borderRadius: "20px", px: 3 }}
                onClick={() => setFormState(1)}
              >
                Sign Up
              </Button>
            </Box>

            {/* FORM */}
            <Box component="form" sx={{ mt: 1, width: "100%" }}>
              {formState === 1 && (
                <TextField
                  fullWidth
                  label="Full Name"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  margin="normal"
                  sx={{
                    "& .MuiOutlinedInput-root": {
                      borderRadius: "12px",
                    },
                  }}
                />
              )}

              <TextField
                fullWidth
                label="Username"
                value={username}
                onChange={(e) => setUsername(e.target.value)}
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              <TextField
                fullWidth
                label="Password"
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                margin="normal"
                sx={{
                  "& .MuiOutlinedInput-root": {
                    borderRadius: "12px",
                  },
                }}
              />

              {error && (
                <p style={{ color: "red", marginTop: "0.5rem" }}>{error}</p>
              )}

              <Button
                fullWidth
                variant="contained"
                sx={{
                  mt: 3,
                  mb: 2,
                  borderRadius: "20px",
                  padding: "0.8rem",
                  fontSize: "1.1rem",
                }}
                onClick={handleAuth}
              >
                {formState === 0 ? "Login" : "Register"}
              </Button>
            </Box>
          </Box>
        </Grid>
      </Grid>

      {/* SUCCESS MESSAGE */}
      <Snackbar
        open={open}
        autoHideDuration={4000}
        message={message}
        anchorOrigin={{ vertical: "bottom", horizontal: "center" }}
        onClose={() => setOpen(false)}
      />
    </ThemeProvider>
  );
}
