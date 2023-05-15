import React, { useContext } from "react";
import ReactPlayer from "react-player";
import { SocketContext } from "../../context/SocketContext";
import "./videoPlayer.css";

const VideoPlayer = () => {
  const { name, callAccepted, myVideo, userVideo, callEnded, stream, call } =
    useContext(SocketContext);
  return (
    <div className="video-container">
      <div className="stream-container">
        {/* my own video */}
        {stream && (
          <div ref={myVideo}>
            <p className="username">{name || "Name"}</p>
            <ReactPlayer playing muted height="100px" width="200px" />
          </div>
        )}

        {/* user video */}
        {callAccepted && !callEnded && (
          <div>
            <p className="username">{name || "Name"}</p>
            <video
              playsInline
              ref={userVideo}
              autoplay
              className="stream-box"
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default VideoPlayer;
