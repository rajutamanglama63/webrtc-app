// import React, { useContext } from "react";
// // import ReactPlayer from "react-player";
import { SocketContext } from "../../context/SocketContext";
// import "./videoPlayer.css";

// const VideoPlayer = () => {
//   const { name, callAccepted, myVideoRef, userVideo, callEnded, stream, call } =
//     useContext(SocketContext);
//   return (
//     <div className="video-container">
//       <div className="stream-container">
//         {/* my own video */}
//         {stream && (
//           <div>
//             <p className="username">{name || "Name"}</p>
//             <video
//               playsInline
//               muted
//               ref={myVideoRef}
//               autoPlay
//               className="stream-box"
//             />
//           </div>
//         )}

//         {/* user video */}
//         {callAccepted && !callEnded && (
//           <div>
//             <p className="username">{call.name || "Name"}</p>
//             <video
//               playsInline
//               ref={userVideo}
//               autoPlay
//               className="stream-box"
//             />
//           </div>
//         )}
//       </div>
//     </div>
//   );
// };

// export default VideoPlayer;

import React, { useContext } from "react";
import { Grid, Typography, Paper } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const VideoPlayer = () => {
  const { name, callAccepted, myVideoRef, userVideo, callEnded, stream, call } =
    useContext(SocketContext);

  const theme = useTheme();
  return (
    <Grid
      container
      sx={{
        justifyContent: "center",
        [theme.breakpoints.down("xs")]: {
          flexDirection: "column",
        },
      }}
    >
      {stream && (
        <Paper
          sx={{ padding: "10px", border: "2px solid black", margin: "10px" }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {name || "Name"}
            </Typography>
            <video
              playsInline
              muted
              ref={myVideoRef}
              autoPlay={true}
              style={{ width: "550px" }}
            />
          </Grid>
        </Paper>
      )}
      {callAccepted && !callEnded && (
        <Paper
          className={{
            padding: "10px",
            border: "2px solid black",
            margin: "10px",
          }}
        >
          <Grid item xs={12} md={6}>
            <Typography variant="h5" gutterBottom>
              {call.name || "Name"}
            </Typography>
            <video
              playsInline
              ref={userVideo}
              autoPlay={true}
              style={{
                width: "550px",
                [theme.breakpoints.down("xs")]: {
                  width: "300px",
                },
              }}
            />
          </Grid>
        </Paper>
      )}
    </Grid>
  );
};

export default VideoPlayer;
