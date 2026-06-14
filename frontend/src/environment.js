// let IS_PROD = true;
// const server = IS_PROD
//   ? "https://apnacollegebackend.onrender.com"
//   : "http://localhost:8000";

// export default server;

// const server = "http://localhost:8000";

// export default server;

const server =
  process.env.NODE_ENV === "production"
    ? "https://video-call-project-ftp7.onrender.com"
    : "http://localhost:8000";

export default server;
